import React from 'react'
import "./Profile.scss";

const profile = () => {
  
  const user = {
    name: 'nasio',
    imageUrl: '/image/profile_400x400.jpeg',
    imageSize: 90,
  };
  
  return (
    <div className='profile -mgb'>
      <h2 className='profile__heading'>{
    user.name}</h2>
      <img className='profile__avatar' src={process.env.PUBLIC_URL + user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height: user.imageSize }} />
    </div>
  )
}

export default profile