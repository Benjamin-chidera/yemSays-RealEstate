import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [latest, setLatest] = useState([]);
  const [properties, setProperties] = useState([]);
  const [inspection, setInspection] = useState([]);
  const [recentInspection, setRecentInspection] = useState([]);
  const [recent, setRecent] = useState([]);
  const [review, setReview] = useState([]);
  const [AllReview, setAllReview] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [filters, setFilters] = useState("available");
  const token = Cookies.get("token");

  const URL =
    "https://yemsyays-realestate-server.onrender.com/api/v1/inspection";
  const BASE_URL = `https://yemsyays-realestate-server.onrender.com/api/v1/properties?location=${location}&type=${type}&price=${price}`;
  const latestUrl =
    "https://yemsyays-realestate-server.onrender.com/api/v1/properties";
  const reviewsUrl = "https://yemsyays-realestate-server.onrender.com/api/v1";

  const getAllReviews = async () => {
    try {
      const {
        data: { reviews },
      } = await axios.get(`${reviewsUrl}/reviews`);
      if (reviews) {
        setAllReview(reviews);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getReviews = async () => {
    try {
      const {
        data: { recentReview },
      } = await axios.get(`${reviewsUrl}/reviews/recent`);
      if (recentReview) {
        setReview(recentReview);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLatestProperties = async () => {
    // GETTING LATEST PROPERTIES
    try {
      setLoading(false);
      const {
        data: { property },
      } = await axios(`${latestUrl}/latest`);
      setLatest(property);

      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getInspection = async () => {
    try {
      const {
        data: { inspection },
      } = await axios(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInspection(inspection);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecentInspection = async () => {
    setLoading(true);
    try {
      const {
        data: { recent },
      } = await axios(`${URL}/recent`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecentInspection(recent);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInspection = async (inspecId) => {
    try {
      const {
        data: { inspection },
      } = await axios.delete(`${URL}/${inspecId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (inspection) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProperty = async (propertyId) => {
    try {
      const { data } = await axios.delete(`${latestUrl}/${propertyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data) {
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
      } = await axios(`${latestUrl}/recent`);
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
    getReviews();
    getAllReviews();
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
        deleteProperty,
        review,
        reviewsUrl,
        AllReview,
        type,
        recentInspection,
        getRecentInspection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
