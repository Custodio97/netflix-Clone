import React,{useEffect,useState} from 'react'
import './Nav.css'
function Nav() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setShow(window.scrollY > 100)
        })
    },[])
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className="nav-logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        <img className='nav-avatar' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default Nav