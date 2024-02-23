import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [latest, setLatest] = useState([]);
  const [properties, setProperties] = useState([]);
  const [inspection, setInspection] = useState([]);
  const [recent, setRecent] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [filters, setFilters] = useState("available");

  const URL = "http://localhost:3000/api/v1/inspection";
  const BASE_URL = `http://localhost:3000/api/v1/properties?location=${location}&type=${type}&price=${price}`;
  const latestUrl = "http://localhost:3000/api/v1/properties";
  const getLatestProperties = async () => {
    // GETTING LATEST PROPERTIES
    try {
      const {
        data: { property },
      } = await axios(`${latestUrl}/latest`);
      setLatest(property);
    } catch (error) {
      console.log(error);
    }
  };

  const getProperties = async () => {
    // GETTING ALL properties
    try {
      setLoading(true);
      const {
        data: { properties },
      } = await axios(BASE_URL);
      setProperties(properties);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getInspection = async () => {
    try {
      const {
        data: { inspection },
      } = await axios(URL);
      setInspection(inspection);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInspection = async (inspecId) => {
    try {
      const {
        data: { inspection },
      } = await axios.delete(`${URL}/${inspecId}`);

      if (inspection) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentProperty = async () => {
    try {
      const {
        data: { properties },
      } = await axios(`${BASE_URL}/recent`);
      setRecent(properties);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    setType(e.target.value);
    console.log(type);
  };

  useEffect(() => {
    getProperties();
  }, [location, type, price, selected, filters, type]);

  return (
    <AppContext.Provider
      value={{
        BASE_URL,
        URL,
        getLatestProperties,
        latest,
        getProperties,
        properties,
        getInspection,
        inspection,
        deleteInspection,
        getRecentProperty,
        recent,
        setLocation,
        setType,
        setPrice,
        loading,
        handleSelect,
        selected,
        filters,
        setFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
