import React, {useEffect} from 'react'

const Alert = ({msg, type, removeAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1000)
    return() => clearTimeout(timeout);
  }, [])
  
  return (
    <div className={`alert-${type}`}>
      {msg}
    </div>
  )
}

export default Alert
