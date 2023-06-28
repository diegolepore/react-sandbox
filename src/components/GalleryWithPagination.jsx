import React from 'react'
import { useState } from 'react'
import { sculptureList } from '../data'

const GalleryWithPagination = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const hasNext = index < sculptureList.length - 1


  function handleNextClick() {
    if(hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  let currentSculpture = sculptureList[index]

  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{currentSculpture.name} </i>
        by {currentSculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{currentSculpture.description}</p>}
      <img
        src={currentSculpture.url}
        alt={currentSculpture.alt}
      />
    </>
  )
}

export default GalleryWithPagination