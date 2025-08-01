import { createContext, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext();

const Context = ({ children }) => {


  //fetch recipe data from api
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipeData = async () => {
      setLoading(true); // Show spinner
      const options = {
        method: 'GET',
        url: 'https://full-stack-recipe-finder-website.onrender.com/api/getallrecipe',
        headers: { accept: 'application/json' }
      };

      try {
        const { data } = await axios.request(options);
        // console.log(data.data);
        setRecipeData(data.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false); // Hide spinner
    };
    fetchRecipeData();
  }, []);







  const data = {
    recipeData,
    setRecipeData,
    loading,
    setLoading,
  };
  return (
    <myContext.Provider value={data}>
      {children}
    </myContext.Provider>
  );
};
export default Context;