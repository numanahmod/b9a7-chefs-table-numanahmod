import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="flex grid-cols-3 justify-around w-[1200px] lg:mt-auto gap-5">
            <div><h1 className='text-3xl font-bold lg:w-[] mt-10 text-center ml-12' >Recipe Calories</h1></div>
            <div>
                <ul className="inline-flex gap-3 font-bold mt-12 ">
                    <li>Home</li>
                    <li> Recipes</li>
                    <li></li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex grid-cols-2 mt-12 gap-3"><div><input className="border-2 w-72 h-12 p-5 -mt-8 bg-slate-300 rounded-3xl" type="text" placeholder="Search"/></div>
            <div><button className="ml-2"> <CgProfile className="w-12 h-12 -mt-2 bg-green-500 rounded-full"></CgProfile></button></div></div> 
            
        </div>
    );
};

export default Navbar;