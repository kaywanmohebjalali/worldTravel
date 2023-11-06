import { useEffect } from "react";

function useGetDataWithReducer(url,dispatch,loadedCityAction,loadingAction, ErrorAction) {
  
  useEffect(() => {
    async function getData() {
     
     
      try {
        if(url){

          dispatch(loadingAction(true))
          const response = await fetch(url);
          let data = await response.json();
          dispatch(loadedCityAction(data))
        }
      } catch (err) {
         dispatch(ErrorAction(err.message))
        }finally{

          dispatch(loadingAction(false))
        }
    }
    getData();
},[url,dispatch,loadedCityAction,loadingAction, ErrorAction]);

}

export { useGetDataWithReducer };
