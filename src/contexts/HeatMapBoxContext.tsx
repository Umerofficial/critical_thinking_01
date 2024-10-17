import { SelectChangeEvent } from "@mui/material";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { MapRef } from "react-map-gl";
import bbox from "@turf/bbox";

export const HeatMapContext = createContext<any | null>(null);

export function HeatMapProvider({ children }: any) {
  const mapRef = useRef<MapRef>(null);
  const [viewport, setViewport] = useState({
    latitude: 25.2048,
    longitude: 55.2708,
    zoom: 10,
    width: "100%",
    height: "100%",
    pitch: 0,
    bearing: 0,
  });
  const [currentZoom, setCurrentZoom] = useState<number>(10);

  const [heatMapData, setHeatMapData] = useState<any | null>([]);
  const [filteredHeatMapData, setFilteredHeatMapData] = useState<any | null>(
    []
  );
  const [filteredSearchData, setFilteredSearchData] = useState<any>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const [popupPropertiesData, setPopupPropertiesData] = useState<any | null>(
    null
  );
  const [clickElement, setClickElement] = useState<number | null>(0);

  const [filteredSearchItems, setFilteredSearchItems] = useState({
    searchItems: "",
    isSearch: false,
    itemName: "",
  });

  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const handleSearchOpenModal = () => setOpenSearchModal(true);
  const handleSearchCloseModal = () => setOpenSearchModal(false);

  const [priceFilters, setPriceFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minSqft: "",
    maxSqft: "",
  });

  const [filters, setFilters] = useState({
    selectedBeds: "1",
    selectedStatus: "show_all",
    selectedIndicator: "building_median_price_sqft",
    selectedApartment: "apartment",
  });
  const [indicatorValues, setIndicatorValues] = useState<any | null>({
    highest: "",
    average: "",
    lowest: "",
  });

  const onSelectedBuilding = useCallback(({ longitude, latitude }: any) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      zoom: 14,
      duration: 2000,
    });
  }, []);

  const handleFilterChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const calculateValues = useCallback(
    (filteredData: any[] | null | undefined, indicator: string) => {
      if (!Array.isArray(filteredData)) {
        console.error("Invalid data: Expected an array");
        return { highest: 0, average: 0, lowest: 0 };
      }

      // Apply filters

      if (!filteredData.length) {
        return { highest: 0, average: 0, lowest: 0 };
      }

      const values = filteredData
        .map((item) => Number(item[indicator]) || 0)
        .filter((value) => value > 0);

      if (values.length === 0) {
        return { highest: 0, average: 0, lowest: 0 };
      }

      const highest = Math.max(...values);
      const lowest = Math.min(...values);
      const average = values.reduce((a, b) => a + b, 0) / values.length;

      return { highest, average, lowest };
    },
    []
  );

  // Memoize the filtered data to avoid unnecessary recalculations
  const memoizedFilteredData = useMemo(() => {
    return (
      heatMapData &&
      heatMapData.filter((building: any) => {
        const isWithinBeds =
          filters.selectedBeds === "show_all" ||
          building.max_bed === parseInt(filters.selectedBeds, 10);
        const isWithinPrice =
          (!priceFilters.minPrice ||
            building.building_starting_price >= priceFilters.minPrice) &&
          (!priceFilters.maxPrice ||
            building.building_starting_price <= priceFilters.maxPrice);
        const isWithinSqft =
          (!priceFilters.minSqft ||
            building.prop_median_price_sqft >= priceFilters.minSqft) &&
          (!priceFilters.maxSqft ||
            building.prop_median_price_sqft <= priceFilters.maxSqft);

        return isWithinBeds && isWithinPrice && isWithinSqft;
      })
    );
  }, [heatMapData, filters, priceFilters]);

  useEffect(() => {
    if (isSearchActive) return;
    setIndicatorValues(
      calculateValues(memoizedFilteredData, filters.selectedIndicator)
    );
    setFilteredHeatMapData(memoizedFilteredData);
  }, [filteredHeatMapData, heatMapData, filters, calculateValues]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handlePriceFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const formattedValue = formatNumber(Number(value));
    if (formattedValue === "") {
      setPriceFilters((prevFilters) => ({
        ...prevFilters,
        [name]: "",
      }));
    } else {
      setPriceFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const LowerCaseValue = value.toLowerCase();

    setFilteredSearchItems((prevFilters) => ({
      ...prevFilters,
      [name]: LowerCaseValue,
    }));

    if (LowerCaseValue != "") {
      const filtered = filteredHeatMapData.filter((item: any) =>
        item.project.toLowerCase().includes(LowerCaseValue)
      );
      setFilteredSearchData(filtered);
    }
  };

  const handleSearchMenuItemClick =
    (menuItem: any) => (event: React.MouseEvent<HTMLElement>) => {
      const filtered = heatMapData.filter(
        (item: any) => item.project === menuItem.project
      );

      // set the state herer...
      setFilteredSearchItems((prevFilters) => ({
        ...prevFilters,
        isSearch: true,
        itemName: menuItem.project,
      }));
      setFilteredHeatMapData(filtered);
      setIsSearchActive(true);
      handleSearchCloseModal();
      if (filtered && Array.isArray(menuItem.coordinates)) {
        const [longitude, latitude] = menuItem.coordinates;
        onSelectedBuilding({ longitude, latitude });
        setPopupPropertiesData(menuItem);
        setClickElement(menuItem.building_id);
      }
    };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = () => {
    // Calculate indicator values with updated price filters

    setFilteredHeatMapData(memoizedFilteredData);
    const updatedIndicatorValues = calculateValues(
      memoizedFilteredData,
      filters.selectedIndicator
    );
    setIndicatorValues(updatedIndicatorValues);

    handleClose();
  };

  const handleReset = () => {
    setPriceFilters({ minPrice: "", maxPrice: "", minSqft: "", maxSqft: "" });

    const filteredData = heatMapData.filter((building: any) => {
      const isWithinBeds =
        filters.selectedBeds === "show_all" ||
        building.max_bed === parseInt(filters.selectedBeds, 10);

      return isWithinBeds;
    });

    setFilteredHeatMapData(filteredData);
    const updatedIndicatorValues = calculateValues(
      filteredData,
      filters.selectedIndicator
    );
    setIndicatorValues(updatedIndicatorValues);
    setFilteredSearchItems((prevFilters) => ({
      ...prevFilters,
      isSearch: false,
    }));
    setIsSearchActive(false);
    setClickElement(0);
    handleClose();
  };

  const formatNumber = (number: number) => {
    if (number >= 1e21) {
      return "";
    }
    if (number >= 1e18) {
      return (number / 1e18).toFixed(1) + "E"; // Exa (quintillion)
    } else if (number >= 1e15) {
      return (number / 1e15).toFixed(1) + "P"; // Peta (quadrillion)
    } else if (number >= 1e12) {
      return (number / 1e12).toFixed(1) + "T"; // Tera (trillion)
    } else if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B"; // Giga (billion)
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M"; // Mega (million)
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "K"; // Kilo (thousand)
    }
    return number.toLocaleString();
  };

  const handleElementClick = (event: any) => {
    const features = event.target.queryRenderedFeatures(event.point);
    const feature = features[0];

    if (feature) {
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      const newZoom = currentZoom + 2;

      // Fit map to bounds and zoom in
      mapRef?.current?.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 3000, zoom: newZoom }
      );

      setCurrentZoom(newZoom);

      // If feature properties exist and contain data

      if (feature.properties && Object.keys(feature.properties).length > 0) {
        const { coordinates, images, amenities } = feature.properties;

        // Parse coordinates if not null and a string
        if (coordinates && typeof coordinates === "string") {
          try {
            feature.properties.coordinates = JSON.parse(coordinates);
          } catch (error) {
            console.error("Failed to parse coordinates:", error);
          }
        }

        // Parse images if not null and a string
        if (images && typeof images === "string") {
          try {
            feature.properties.images = JSON.parse(images);
          } catch (error) {
            console.error("Failed to parse images:", error);
          }
        }

        // Parse amenities if not null and a string
        if (amenities && typeof amenities === "string") {
          try {
            feature.properties.amenities = JSON.parse(amenities);
          } catch (error) {
            console.error("Failed to parse amenities:", error);
          }
        }

        if (feature.properties.coordinates) {
          setPopupPropertiesData(feature.properties);
          setClickElement(feature.properties.id);
        } else {
          console.warn("No coordinates found, skipping popup data setup.");
        }
      }
    }
  };

  return (
    <HeatMapContext.Provider
      value={{
        viewport,
        setViewport,
        filters,
        heatMapData,
        setHeatMapData,
        handleFilterChange,
        indicatorValues,
        handleTabChange,
        handlePriceFilterChange,
        handleOpen,
        handleApply,
        handleReset,
        handleClose,
        tabIndex,
        anchorEl,
        priceFilters,
        formatNumber,
        setFilteredHeatMapData,
        filteredHeatMapData,
        handleSearchChange,
        handleSearchOpenModal,
        handleSearchCloseModal,
        openSearchModal,
        setFilteredSearchItems,
        filteredSearchItems,
        filteredSearchData,
        handleSearchMenuItemClick,
        mapRef,
        handleElementClick,
        setPopupPropertiesData,
        popupPropertiesData,
        clickElement,
        setClickElement,
      }}
    >
      {children}
    </HeatMapContext.Provider>
  );
}
