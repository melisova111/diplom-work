import React, { useContext } from "react"
import { Context } from ".."
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink } from "react-router-dom"

function Navbar(){
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  return(
    <>
      {
        user ? 
        <button onClick={() => auth.singOut()}>Exit</button> :
        <NavLink to={'/login'}>
          <button>Login</button>
        </NavLink>
      }
    </>
  )
}

export default Navbar