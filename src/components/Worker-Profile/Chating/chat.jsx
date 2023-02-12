import { useEffect } from 'react'
import './chat.css'
import { useLocation } from 'react-router-dom'
import { get_chat_message_list, send_message } from '../../../DAL/chat'
import { useState } from 'react'
import moment from 'moment/moment'
import io, { connect } from 'socket.io-client'
import { base_url } from '../../../utils/invokeApi'
const Chat = () => {
  const socket = io(base_url)
  const location = useLocation()

  const [loading, setLoading] = useState(true)
  const [messageList, setMessageList] = useState(true)
  const [message, setMessage] = useState('')
  const my_id = JSON.parse(localStorage.getItem('user')).user_id._id
  // send message
  const SendMessage = async () => {
    const postData = {

      "receiver_id": location.state.person_id,
      // "ad_id": "639c50e6d435e037e4a4c577",
      "chat_id": location.state.resp.chat._id,
      "message": message,
    }
    const resp = await send_message(postData)
    if (resp.code == 200) {
      console.log(resp, "respsend message");
      send_message_through_socket(resp.message)
      messageList.push(resp.message)
      setMessageList([...messageList])
      setMessage('')
      // console.log(messageList);
    }
  }
  const send_message_through_socket = (data) => {
    socket.emit('send_message', data)
  }

  // chat list
  const GetChatData = async () => {
    const resp = await get_chat_message_list(location.state.resp.chat._id)
    if (resp.code == 200) {


      console.log(resp, "resp");
      setMessageList(resp.message.reverse())
      setLoading(false)
    }
  }


  useEffect(() => {
    GetChatData()
  }, [])

  // useeffect for socket
  useEffect(() => {
    socket.on('connect', () => {
      console.log("Hello User I am Connected");
    })
    socket.on('receive',(data)=>{
      console.log(data,"Data from listner messgae");
      messageList.push(data)
    })

    return () => {
      socket.removeAllListeners()
    }


  }, [])









  return (
    <>{!loading &&
      <div className="container">
        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              {/* Other User personal info
             */}
              <div className="col-lg-12">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#view_info"
                >
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />

                </a>
                <div className="chat-about">
                  <h6 className="m-b-0">Aiden Chavez</h6>
                </div>
              </div>
              
             
            </div>
          </div>
          <div style={{ height: '100vh', overflow: 'auto',}} className="chat-history">
            <ul className="m-b-0">




              {messageList.map(message => (
                <li key={message._id} className="clearfix">
                  <div className="message-data">
                    <span className="message-data-time other-messgae">{moment(message.createdAt).format('hh:mm')}</span>
                  </div>
                  <div className={my_id == message.sender_id ? "message other-message float-right " : "message my-message"}>

                    {message.message}
                  </div>


                </li>





              ))}

            </ul>
          </div>




          {/* New Chat Input TextBox */}
          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <div className="input-group-prepend">
                <span style={{ cursor: 'pointer' }} className="input-group-text" onClick={() => {
                  SendMessage()
                }}>
                  <i className="fa fa-send" />
                </span>
              </div>
              <input
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="Enter text here..."
              />
            </div>
          </div>
        </div>
      </div>}


    </>
  )
}
export default Chat