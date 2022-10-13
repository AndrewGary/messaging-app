import React from 'react'
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'
let socket

const Chatroom = () => {

    useEffect(() => {socketInitializer()}, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')

      
    })
  }

  return (
    <div>Chatroom</div>
  )
}

export default Chatroom
