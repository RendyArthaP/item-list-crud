import React from 'react'

const List = ({lists}) => {
  return (
    <div>
      {lists.map(list => (
        <div key={list.id}>
          <p>
            {list.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default List
