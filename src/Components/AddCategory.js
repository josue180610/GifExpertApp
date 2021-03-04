import React, { useState } from 'react';

const AddCategoryForm = (props) => {
    
    const [inputValue, setInputValue] = useState("")

    const handleValue = (e) => { 
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            props.setCategories([inputValue,...props.categories])
            setInputValue("");   
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="category" 
            className="input-value"
            placeholder="Ingresar categoria..."
            onChange={handleValue}
            value={inputValue}
            ></input>
        </form>
    )
}

export default AddCategoryForm;