// import io from 'socket.io-client'

// let baseURL = 'http://localhost:8080'

// // Create a new WebSocket.
// const socket = io.connect(baseURL);

// export default socket





let baseURL = 'ws://localhost:8080'

const socket = new WebSocket(baseURL);

export default socket