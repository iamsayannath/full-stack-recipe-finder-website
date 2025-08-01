import { useContext } from 'react';
import Card from '../components/Card';
import { myContext } from '../context/Context';
import { Link } from 'react-router-dom';
import "../index.css";



function Getallrecipe() {
  // fetch data from context api
  const { recipeData, loading } = useContext(myContext);

  return (
    <div>
      <h1 className='text-4xl font-semibold text-green-600 m-10 text-center'>All Recipes</h1>
      {loading &&
        <div className="spinner"></div>
      }
      <div className='flex flex-wrap justify-center gap-10'>
        {
          recipeData.map((recipe) => (
            <Link to={`/recipedetails/${recipe.idMeal}`} key={recipe.idMeal}>
              <Card key={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                category={recipe.strCategory} />
            </Link>)
          )}
      </div>
    </div>
  );
}

export default Getallrecipe;;