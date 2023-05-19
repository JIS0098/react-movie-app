import React from 'react'

const Review = ({ reviews }) => {
  return (
      <ul className="review-list">
        {reviews.results && reviews.results.map((review) => (<li className="review" key={review}><h4>{review?.author}</h4><p>{review?.content}</p></li>))}
      </ul>
  )
}

export default Review
