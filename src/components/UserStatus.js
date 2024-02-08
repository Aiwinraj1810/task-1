import React from 'react'
import './styles/userStatus.css'
import mainImage from './styles/logo192.png'
const UserStatus = () => {
  return (
    <div className='userWrap'>
      <div className='userImg'>
        <img src={mainImage}  alt='logo'/>
      </div>
      <div className="userName">
        <span>UserName</span>
        
      </div>
    </div>
  )
}

export default UserStatus
