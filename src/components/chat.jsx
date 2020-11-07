import React from "react";

export const Chat = (props) => {
  return(
    <div className="chat-list" id="scroll-area">
      {props.chats.map((chat, i) => {
        const BotAnswer = (chat.type === "question");        //questionである
        return(
          <div className="chat-box">
            {BotAnswer?(
              //ボット
              <div className="left">
                <div className="avator">botです</div>
                <div className="in-chat" key={i.toString()}>
                  {chat.text}
                </div>
              </div>
            ):(
              //ゲスト
              <div className="right">
                <div className="avator">guestです</div>
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