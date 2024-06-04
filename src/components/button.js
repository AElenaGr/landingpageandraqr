import * as React from 'react'


function TandemButton({enlace,children}){
  return(
    <a href={enlace} role='button' className='button'>{children}</a>
  )
}
export default TandemButton