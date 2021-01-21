import React from 'react'
import Edit from './icons/Edit';
import Trash from './icons/Trash';

const List = ({lists, removeItem, editItem}) => {
  return (
    <div>
      {lists.map((list) => {
        const {id, title} = list
        return (
          <div 
          key={id}
          className="flex flex-row justify-between pb-2"
        >
          <p>
            {title}
          </p>
          <div>
            <button className="mr-2" onClick={() => editItem(id)}>
              <Edit />
            </button>
            <button onClick={() => removeItem(id)}>
              <Trash />
            </button>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default List

