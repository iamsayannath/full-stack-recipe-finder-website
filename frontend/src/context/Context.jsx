import { createContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext();

const Context = ({ children }) => {


  //fetch recipe data from api
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    const fetchRecipeData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.freeapi.app/api/v1/public/meals',
        params: { page: '1', limit: '25' },
        headers: { accept: 'application/json' }
      };

      try {
        const { data } = await axios.request(options);
        setRecipeData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeData();
  }, []);




  const data = {
    recipeData,
  };
  return (
    <myContext.Provider value={data}>
      {children}
    </myContext.Provider>
  );
};
export default Context;