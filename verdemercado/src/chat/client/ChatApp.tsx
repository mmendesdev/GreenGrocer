import { useState } from 'react'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function ChatApp() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <div style={{ "height": "100vh",
      "background": "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
      "display": "flex",
      "justifyContent": "center",
      "alignItems" : "center",}}>
      {
        chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
      }
    </div>
  )
}

export default ChatApp
