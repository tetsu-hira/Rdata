import React from 'react';

const Sort = ({ button, handleSort, name }) => {
  return (
    <div className="SortButton">
      <button
        onClick={() => handleSort(button)}
        className={button} value={name}>
        {name}
      </button>
    </div>
  )
}

export default Sort;