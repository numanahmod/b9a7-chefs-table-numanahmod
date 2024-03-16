import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="flex grid-cols-3 justify-around w-[1200px] lg:mt-auto gap-5">
            <div><h1 className='text-3xl font-bold lg:w-[] mt-10 text-center'>Recipe Calories</h1></div>
            <div>
                <ul className="inline-flex gap-3 font-bold mt-12 ">
                    <li>Home</li>
                    <li> Recipes</li>
                    <li></li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex grid-cols-2 mt-12 gap-3"><div><input className="border-2 w-52 h-12 rounded-md p-5 -mt-8 bg-slate-300" type="text" placeholder="Search"/></div>
            <div><button className="ml-2"> <CgProfile className="text-green-500 w-10 h-10 -mt-2"></CgProfile></button></div></div> 
            
        </div>
    );
};

export default Navbar;