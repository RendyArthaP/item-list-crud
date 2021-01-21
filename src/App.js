import React, {useState, useEffect} from 'react';
import Alert from './Alert';
import List from './List';

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item) {
      showAlert(
        true,
        'danger',
        'Please input the item'
      )
    } else if(item && isEditing) {
      setList(
        list.map((itemUpdate) => {
          if(itemUpdate.id === editID) {
            return {
              ...itemUpdate,
              title: item
            }
          }
          return itemUpdate
        })
      )
      setItem('')
      setEditID(null);
      setIsEditing(false);
      showAlert(
        true,
        'success',
        'Item Updated'
      )
    } else {
      showAlert(
        true,
        'success',
        'Item Submitted'
      )
      const newItem = {
        id: new Date().getTime().toString(),
        title: item
      };
      setList([...list, newItem])
      setItem('');
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg})
  }

  const clearItems = () => {
    showAlert(
      true,
      'danger',
      'All items deleted'
    )
    setList([])
  }

  const removeItem = (id) => {
    showAlert(
      true,
      'danger',
      'Item removed'
    )
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setItem(specificItem.title)
  }

  return (
    <div className="bg-blue-100 w-screen h-screen flex items-center">
      <div className="mx-auto w-1/2 bg-white shadow-xl rounded pt-6 pb-10">
        <div className="flex flex-col text-center items-center">
          <div>
            <form onSubmit={handleSubmit}>
              {alert.show &&(
                <Alert {...alert} 
                  removeAlert={showAlert} 
                  list={list}
                />
              )}
              <h1 className="pb-5">Item List</h1>
              <input 
                type="text"
                className="border border-black rounded"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-blue-500 rounded text-white w-20 h-8 ml-4 text-sm"
              >
                {isEditing ? 'Edit' : 'Submit'}
              </button>
            </form>
          </div>
          {list.length > 0 && (
            <div className="w-full p-4">
              <List 
                lists={list} 
                removeItem={removeItem} 
                editItem={editItem}
              />
              <button 
                onClick={clearItems}
                className="bg-blue-500 rounded text-white w-32 h-8 text-sm"
              >
                Clear All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
