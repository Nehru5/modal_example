import React from 'react'
const Signup = (props) => {

  let overlay = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(222, 240, 105, 0.6)",
    position:"fixed",
    top:"0",
    left:"0",
    right:"0",
    bottom:"0",
    backdropFilter:"blur(2px)"
  }

  let modal={
    textAlign:"center",
    backgroundColor:"#fff",
    padding:"20px",
    borderRadius:"10px",
    width:"300px",
    boxShadow:"0 0 10px"
  }



  return (
    <>
      <div className='overlay' style={overlay}>
        <div className='modal' style={modal}>
          <h1>Signup page</h1>
          <input className='in' type="text" placeholder='Enter username' /> <br />
          <input className='in' type="text" placeholder='Enter Email' /><br />
          <input className='in' type="text" placeholder='Enter Phone no' /> <br />
          <input className='in' type="text" placeholder='Enter Password' /> <br />
          <button>Signup</button>
          <button onClick={()=>{props.setShow(false)}}>Close</button>
        </div>
      </div>
    </>
  )
}

export default Signup