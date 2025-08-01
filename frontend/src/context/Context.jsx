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
        url: 'https://full-stack-recipe-finder-website.onrender.com/api/gettallrecipe',
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