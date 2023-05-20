import React from 'react'


const Pagination = ({movie}) => {
 let pageGroup = Math.ceil(movie?.page/5);
 let last = pageGroup*10;
 let first = last-9
 return (
   <div></div>
  )
}

export default Pagination
