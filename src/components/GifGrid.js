import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    
   const {loading, data:images} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>

        {loading && <p>Loading...</p>}
       
        {
            images.map(img=> (
               <GifGridItem
                    {...img}
                    key={img.id}
                />
            ))
        }
    
    </>
  )
}
