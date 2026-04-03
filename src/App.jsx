import React,{useState} from 'react'
import Signup from "./pages/Signup"
const App = () => {
  const [show,setShow] = useState(false)
 
  return (
    <>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <h1>Welcome to Home page</h1>
      <button onClick={()=>{setShow(true)}}>Signup</button>
      {show && <Signup setShow={setShow}/>}
      </div>
    </>
  )
}

export default App