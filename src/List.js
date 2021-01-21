import React from 'react'
import Edit from './icons/Edit';
import Trash from './icons/Trash';

const List = ({lists}) => {
  return (
    <div>
      {lists.map(list => (
        <div 
          key={list.id}
          className="flex flex-row justify-between pb-2"
        >
          <p>
            {list.title}
          </p>
          <div>
            <button className="mr-2">
              <Edit />
            </button>
            <button>
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List

