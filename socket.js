import io from 'socket.io-client'

const socket = io('http://192.168.1.158:8080/')

socket.on('connect', () => {
  console.log('Connected!')
})

export default socket
