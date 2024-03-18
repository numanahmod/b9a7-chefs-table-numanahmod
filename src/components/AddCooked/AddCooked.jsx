import PropTypes, { element } from 'prop-types';
import './AddCooked.css'
import { useState } from 'react';

const AddCooked = ({addCooked}) => {
    
    
   const {name, time, calories,id} = addCooked;

   const handlePreparing = (id) => {
    const newArray = AddCooked.filter(item => item.id != id );
    console.log(newArray)
   }
   
    return (
       
       
        <table className='flex grid-cols-4 justify-around ml-8 mb-3 bg-slate-300 mr-2 rounded-md' >
            
          
            <tr className='w-[70px] ml-5'>{name}</tr>
            <tr className='w-[70px] ml-10' > {time } min  </tr> 
            <tr className='w-[70px] -mr-10'> {calories} </tr>
            <button onClick={() => handlePreparing(id) } className='ppr-btn mt-1'> Preparing </button>
        </table>
    );
};
AddCooked.propTypes = {
    addCooked: PropTypes.object
}

export default AddCooked;