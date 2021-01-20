import React, {useState, useEffect} from 'react';
import Alert from './Alert';
import List from './List';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      //display alert
    } else if (item && isEditing) {
      // deal
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: item
      };
      setList([...list, newItem])
      setItem('')
    }
  }

  return (
    <div className="bg-blue-100 w-screen h-screen flex items-center">
      <div className="mx-auto w-1/2 h-1/2 bg-white shadow-xl rounded">
        <div className="flex flex-col text-center items-center">
          <div>
            <form onSubmit={handleSubmit}>
              {alert.show && (<Alert />)}
              <h1>Grocery Bud</h1>
              <input 
                type="text" 
                className="border border-black rounded"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-blue-500 rounded text-white w-20 h-8 ml-4"
              >
                {isEditing ? 'Edit' : 'Submit'}
              </button>
            </form>
          </div>
          <List lists={list}/>
          <button>
            Clear Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
