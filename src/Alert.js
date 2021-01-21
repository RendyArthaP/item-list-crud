import React, {useEffect} from 'react'

const Alert = ({msg, type, removeAlert, list}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1000)
    return() => clearTimeout(timeout);
  }, [list])
  
  return (
    <div className={`alert-${type}`}>
      {msg}
    </div>
  )
}

export default Alert
