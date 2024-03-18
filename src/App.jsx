

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooked from './components/Cooked/Cooked'
import Navbar from './components/Navbar/Navbar'

import Recipes from './components/Recipes/Recipes'

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
   const [cooked, setCooked] = useState([]);
   const handleAddCooked = recipe => {
    const newCookedCount = [...cooked, recipe];
    const isHere = cooked.find (item => item.id == recipe.id);
    if (!isHere) {
      setCooked(newCookedCount)
    } else {
      // alert(" You can not select a single recipe more than once.")
     toast('You can not select a single recipe more than once.')
      
    }
 
   }

   
    

  return (
    <>
      
      <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='flex grid-cols-2 w-[1200px] gap-2'>
      <Recipes handleAddCooked = {handleAddCooked} ></Recipes>
     
      <Cooked cooked={cooked}></Cooked>
      
      </div>
      
      </div>
      
    </>
  )
}

export default App
