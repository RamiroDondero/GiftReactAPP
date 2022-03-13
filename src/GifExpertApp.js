import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import PropTypes from 'prop-types'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

  const [categories, setCategories] = useState(['One Punch']);

  
  return (
    <>
    <h2>Gif Expert App</h2>
    <AddCategory setCategories={setCategories} />
    <hr/>
    <ul>
        {
            categories.map(category=> (
              <GifGrid 
                key={category}
                category={category}/>
            ))
        }
    </ul>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp