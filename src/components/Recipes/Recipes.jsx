import { useEffect } from 'react';
import { useState } from 'react';
import './Recipes.css'

import Recipe from '../Recipe/Recipe';
import PropTypes from 'prop-types';


const Recipes = ({handleAddCooked}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then( data => setRecipes(data))

    } , [])
    return (
        <div className='w-[1200px] ml-12'>
            <h1 className='text-3xl font-bold text-center mt-12'> Our Recipes </h1>
            <p className='text-center' >Everyday recipes with ratings and reviews by home cooks like you.  Find easy dinner ideas, <br /> healthy recipes,  plus helpful cooking tips and techniques.</p>
            <div className='recipe-con'> 
            
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}
                    handleAddCooked = {handleAddCooked}
                    ></Recipe>)
                }
                
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleAddCooked: PropTypes.func
}

export default Recipes;