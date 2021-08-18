import React from 'react';

const Sort = ({ button, handleSort, sort }) => {
  return (
    <button
      onClick={() => handleSort(button)}
      className="SortButton">
      {button}
    </button>
  )
}

export default Sort;