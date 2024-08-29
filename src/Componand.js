import React from 'react'
import  { useContext } from 'react'
import { friendContext } from './FriendContext'
export default function Componand() { 
    
    const abc = useContext(friendContext);

  return (
    <div>Componand { abc }</div>
  )
}
