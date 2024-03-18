import PropTypes from 'prop-types';
import AddCooked from '../AddCooked/AddCooked';

const Cooked = ({cooked}) => {
    
    return (
        <div>
            <div className='w-[500px] want m-2 mt-40'> <h2 className='text-center text-xl font-bold'> Want to cook: {cooked.length} </h2> 

            <hr className='w-full' /> 
                <div className='flex grid-cols-4 justify-around ml-8 font-bold'>
                     <div>Name </div>
                     <div> Time</div>
                     <div> Calories </div>
                     <div></div>
                </div>
              
                    {
                        cooked.map((addCooked) => <AddCooked key={addCooked.time} addCooked={addCooked} ></AddCooked> )
                    }
               

                

            

                <h3 className='text-center text-xl font-bold'> Current Cooking: </h3>
                <hr className='w-full' /> 
                <div className='flex grid-cols-3 justify-around ml-8 font-bold'>
                     <div>Name </div>
                     <div> Time</div>
                     <div> Calories </div>
                </div>
                </div>
        </div>
    );
};

Cooked.propTypes = {
    cooked: PropTypes.array 
}
export default Cooked;