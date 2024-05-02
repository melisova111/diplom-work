import Delivery from "../"


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