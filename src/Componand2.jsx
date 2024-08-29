import React, { useContext } from 'react'
import { friendContext } from './FriendContext'
// import { useContext } from 'react';

export default function() {
    const myContext = useContext(friendContext);
  return (
    <div>
    my name is : {myContext}
    </div>
  )
}
