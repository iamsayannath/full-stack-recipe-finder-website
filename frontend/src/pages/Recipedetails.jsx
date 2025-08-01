import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../context/Context.jsx';


function Recipedetails() {

  //get data from params
  const id = useParams().id;
  console.log("id", id);

  const { recipeData } = useContext(myContext);
  console.log("recipeData", recipeData);

  const product = recipeData.data?.data?.find((item) => item.idMeal === id);
  console.log(product);



  return (
    <div className="w-full p-10 mx-auto">
      <div className="flex flex-col md:flex-row gap-16 mt-4">
        <div className="flex gap-3">
          <div className="border border-gray-500/30 max-w-100 max-h-100 rounded-2xl overflow-hidden">
            <img src={product.strMealThumb} alt="Selected product" className="w-full h-full object-cover" />
          </div>
        </div>



        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl text-green-600 font-medium">{product.strMeal}
          </h1>
          <div className="mt-6">
            <p className="text-gray-500/70">Category: {product.strCategory}</p>
            <p className="text-l">Area: {product.strArea}</p>
          </div>

          <p className="text-2xl font-bold mt-6  text-green-600">Instraction for recipe</p>
          <p className="text-gray-500/70 mt-2">{product.strInstructions}</p>

          <p className="text-2xl font-medium mt-6  text-green-600">Ingredients</p>
          <ul className="list-disc list-inside mt-2">


            {product.strIngredient1 && <li>{product.strIngredient1} - {product.strMeasure1}</li>}
            {product.strIngredient2 && <li>{product.strIngredient2} - {product.strMeasure2}</li>}
            {product.strIngredient3 && <li>{product.strIngredient3} - {product.strMeasure3}</li>}
            {product.strIngredient4 && <li>{product.strIngredient4} - {product.strMeasure4}</li>}
            {product.strIngredient5 && <li>{product.strIngredient5} - {product.strMeasure5}</li>}
            {product.strIngredient6 && <li>{product.strIngredient6} - {product.strMeasure6}</li>}
            {product.strIngredient7 && <li>{product.strIngredient7} - {product.strMeasure7}</li>}
            {product.strIngredient8 && <li>{product.strIngredient8} - {product.strMeasure8}</li>}
            {product.strIngredient9 && <li>{product.strIngredient9} - {product.strMeasure9}</li>}
            {product.strIngredient10 && <li>{product.strIngredient10} - {product.strMeasure10}</li>}
            {product.strIngredient11 && <li>{product.strIngredient11} - {product.strMeasure11}</li>}
            {product.strIngredient12 && <li>{product.strIngredient12} - {product.strMeasure12}</li>}
            {product.strIngredient13 && <li>{product.strIngredient13} - {product.strMeasure13}</li>}
            {product.strIngredient14 && <li>{product.strIngredient14} - {product.strMeasure14}</li>}
            {product.strIngredient15 && <li>{product.strIngredient15} - {product.strMeasure15}</li>}
            {product.strIngredient16 && <li>{product.strIngredient16} - {product.strMeasure16}</li>}
            {product.strIngredient17 && <li>{product.strIngredient17} - {product.strMeasure17}</li>}
            {product.strIngredient18 && <li>{product.strIngredient18} - {product.strMeasure18}</li>}
            {product.strIngredient19 && <li>{product.strIngredient19} - {product.strMeasure19}</li>}
            {product.strIngredient20 && <li>{product.strIngredient20} - {product.strMeasure20}</li>}
          </ul>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-green-200 transition rounded-2xl">
              Give feedback
            </button>

            <button className="w-full py-3.5 cursor-pointer font-medium bg-green-600 text-white transition rounded-2xl" >
              <a href={product.strYoutube} target='blank'> watch video </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipedetails;