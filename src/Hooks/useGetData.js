import { useEffect } from "react";

function useGetData(url,setCities, setLoading, setError) {

  
  useEffect(() => {
    async function getData() {
     
      try {
        setLoading(true);
        const response = await fetch(url);
        let data = await response.json();
        setCities(data)
      } catch (err) {
          setError(`${err.message} ⚠️`);
        }finally{

        setLoading(false)
      }
    }
    getData();
},[url, setLoading, setError, setCities]);

}

export { useGetData };
