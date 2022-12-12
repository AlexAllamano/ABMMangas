import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, verbo, datos) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();


  useEffect(() => {
    setLoading(true);

    hacerConsulta();
  }, [url]);



  async function hacerConsulta() {
    try {
      const response = await axios({
        url: url,
        method: verbo,
        data: datos,
      });
      setData(response.data);
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {

      console.log(2);
      setLoading(false);
    }
  }

  return { data, error, loading };
};
