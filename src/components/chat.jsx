import React from "react";
import MyImg from "../assets/img/my.jpeg"
import NoIcon from "../assets/img/no-profile.jpg"

export const Chat = (props) => {
  return(
    <div className="chat-list" id="scroll-area">
      {props.chats.map((chat, i) => {
        const BotAnswer = (chat.type === "question");        //questionである
        return(
          <div className="chat-box wrapper">
            {BotAnswer?(
              //ボット
              <div className="left">
                <div className="avator">
                  <img src={MyImg} className="icon-img" alt="bot" />
                </div>
                <div className="in-chat" key={i.toString()}>
                  {chat.text}
                </div>
              </div>
            ):(
              //ゲスト
              <div className="right">
                <div className="avator">
                  <img src={NoIcon} className="icon-img" alt="guest" />
                </div>
                <div className="in-chat" key={i.toString()}>
                  {chat.text}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}