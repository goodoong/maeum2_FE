import { useState, useEffect } from "react";
import { setting } from "../service/setting";

const useFetchReport = () => {
  const [reportdata, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await setting();
        setData(response.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { reportdata, loading };
};

export default useFetchReport;
