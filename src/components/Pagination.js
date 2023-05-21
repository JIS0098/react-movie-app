import React from 'react'

// https://velog.io/@ctdlog/React-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84 참고해서 페이지네이션 구현해보기 
const Pagination = ({movie}) => {
 let pageGroup = Math.ceil(movie?.page/5);
 let last = pageGroup*10;
 let first = last-9
 const pagination =()=>{
    for(let i=first; i<=last; i++){}
 }
 return (
   <div>
     <ul>

     </ul>
   </div>
  )
}

export default Pagination
