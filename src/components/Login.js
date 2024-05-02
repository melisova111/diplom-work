import React, { useContext } from "react"
import firebase from "firebase/compat/app"
import { Context } from ".."

function Login(){
  const {auth} = useContext(Context) 
  const login = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return(
    <>
      <button onClick={login}>Enter with Google</button>
    </>
  )
}

export default Login