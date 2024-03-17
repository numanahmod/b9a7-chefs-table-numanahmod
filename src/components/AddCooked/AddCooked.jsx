import PropTypes from 'prop-types';
import './AddCooked.css'

const AddCooked = ({addCooked}) => {
    
   const {name, time, calories,} = addCooked;
    return (
        <div className='flex grid-cols-4 justify-around ml-8 mb-3 ' >
            
            <p> {} </p>
            <h3 className='w-[70px] ml-5'>{name}</h3>
            <h3 className='w-[70px] ml-10' > {time } min  </h3> 
            <h3 className='w-[70px] -mr-10'> {calories} </h3>
            <button className='ppr-btn '> Preparing </button>
        </div>
    );
};
AddCooked.propTypes = {
    addCooked: PropTypes.object
}

export default AddCooked;