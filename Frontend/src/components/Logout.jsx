import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
  const  [authUser,setAutUser] = useAuth()
  const handleLogout=()=>{
    try {
        setAutUser({
          ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        TransformStream.success('Logout sucessfully');
        // document.getElementById("my_modal_3").close();
      

        setTimeout(() =>{
          window.location.reload();
        },3000); 

    }catch (error){
      alert('Error:' + error);
      setTimeout(() => {}, 3000)
     
    }
  };
  return (
    <div>
        <button className='px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
            Logout
            </button>

    </div>
  )
}

export default Logout;