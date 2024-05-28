import * as React from 'react'

function AlertButton({message,children}){
  return(
    <button onClick={function() {
      alert(message)
    }}>
      {children}
    </button>
  )
}
export default AlertButton