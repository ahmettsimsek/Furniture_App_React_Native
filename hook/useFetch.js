import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/products/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // sayfa ilk yüklendiğinde çalışır
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData(); // dışarıdan tetiklenebilir yeniden fetch işlemi
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
