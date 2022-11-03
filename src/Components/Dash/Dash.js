import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dash = () => {

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("SavedToken")){
            navigate("/")
        }
    },[])
 
  return (
    <div>Dash</div>
  )
}

export default Dash