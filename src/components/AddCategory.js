import React , {useState} from 'react'
import propTypes from 'prop-types'



export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleInputValue = (e)=> setInputValue(e.target.value) 

  const handleSubmit = (e)=>{
    
    e.preventDefault();

    if(inputValue.trim().length>2){
      setCategories((cat)=> [inputValue, ...cat])
      setInputValue('');
    }
 
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputValue}
        type='text'
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes={
  setCategories: propTypes.func.isRequired
}
