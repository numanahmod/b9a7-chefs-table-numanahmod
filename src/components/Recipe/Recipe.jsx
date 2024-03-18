import PropTypes from 'prop-types'; 
import './Recipe.css'
import { FcClock } from "react-icons/fc";
import { FaFire } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';

const Recipe = ({recipe, handleAddCooked }) => {
    const {name, image, description, ingredients, time, calories} = recipe;
    return (
        <div>
            <div className='recipe-container mb-3 mt-6'>
            <img className='recipe-container-img' src={image} alt="" />
        
            <h2 className='recipe-container-title'>{name}</h2>

            <p className='mt-2 mb-6'> {description} </p>
            <h4 className='font-bold'>Ingredients: {ingredients.length}</h4>
            <ul>
                <li> {ingredients[0]} </li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                
            </ul>

            <div className='flex grid-cols-2 mt-6 gap-8'>
                <div> <p className='inline-flex gap-2'> <FcClock className='mt-1'></FcClock>  {time}  minutes </p> </div>
                <div> <p className='inline-flex gap-2' > <FaFire className='mt-1'></FaFire> {calories} </p></div>
            </div> 
            <button onClick={() => handleAddCooked(recipe)} className='want-cook-btn font-bold'>Want to Cook</button>
            <ToastContainer/>
        </div>
        <div>
            
        </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddCooked: PropTypes.func
}
export default Recipe;