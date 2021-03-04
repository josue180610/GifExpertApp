import React , {useState} from 'react';
import AddCategory from './Components/AddCategory';
import GridCategory from './Components/GifGridCategory';
const GifExpertApp = () => { 
    const [categories,setCategories] = useState(["One Puch","Samurai X","Dragon Ball"]);
    /* const handleAdd = () => {
        setCategories([ 
            ...categories,"Black Clover"
        ])
    } */
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } categories= { categories }/>
        <hr></hr>
        
        {/* <button onClick={handleAdd}>+ Agregar</button> */}
        {/* <ol>

        {
           categories.map((item)=>(
               <li key={item}>{item}</li>
           ))
        }    
        
        </ol> */}
        <GridCategory arrCategory = {categories} /> 
        </>
    )
}

export default GifExpertApp;