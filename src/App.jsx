import React from "react";
import "./assets/reset.css";
import "./assets/style.css";

import Modal from 'react-modal';

import {OpenBtn} from "./components/open-btn";
import {CloseBtn} from "./components/close-btn";

import {ChatData} from "./chat-data"

import {Form} from "./components/form";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      answers: [],                                 //回答
      chats: [],                                   //選択されたチャットを保存して表示する場所
      currentId: "initial",                        //chat-data.jsのIDの初期値
      chatData: ChatData,                          //chatのデータ
      open: false,
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  nextQuestion(nextId){
    const chats = this.state.chats
    console.log(nextId, "nextId")                      //『chat-data.js』のcurrentIdがどれかを確認

    chats.push({
      text: this.state.chatData[nextId].question,      //そのIDの『question』をプッシュする
      type: "question",                                //answersではなくquestion
    })

    this.setState({
      answers: this.state.chatData[nextId].answers,    //answersには取得したIDのanswersを保存
      chats: chats,                                    //プッシュしたものを保存
      currentId: nextId,                               //取得したIDを保存
    })
  }

  selectAnswer(value, nextId){
    switch (true) {                        //caseの条件がtrueであるか
      case (nextId === "initial"):         //nextId(currentId)がinitialと等しいか
        // setaTimeoutで遅延
        setTimeout(() => this.nextQuestion(nextId), 500)          //nextId(currentId)をnextQuestionに引数として渡す
        break;

      case(/^https:*/.test(nextId)):       //testメゾットで正規表記の『https:』が含まれているか検索する
        const a = document.createElement("a");
        a.href = nextId;                   //hrefをnextIdのリンクに指定
        a.target = "_blank";               //targetはブランク指定
        a.click();                         //クリック可能にする
        break;

      case(nextId === "contact"):
        this.openMenu()
        break;
    
      default:                             //初期値ではない場合
        const chats = this.state.chats;    //チャットの内容を取得する
        chats.push({
          text: value,                     //選択された回答
          type: "answer"
        })
        this.setState({
          chats: chats                     //chats更新
        })
        setTimeout(() =>  this.nextQuestion(nextId), 500)          //nextQuestionに次のIDを引数として渡す
        break;
    }
  }

  // 着地する直前に呼び出し表示する
  componentDidMount(){
    const initialValue = ""                                  //回答初期値は空の文字列
    this.selectAnswer(initialValue, this.state.currentId)    //引数として空の文字列とcurrentIdのinitialを渡す
  }

  // コンポーネントが再び表示されたタイミングで呼び出し
  componentDidUpdate(){
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  // 
  openMenu(){
    this.setState({
      open: true
    })
    console.log(this.state.open)
  }

  closeMenu(){
    this.setState({
      open: false
    })
    console.log(this.state.open)
  }
  // 

  render(){
    return(
      <div className="content">
        <div className="chat-bot">
          <div className="chat-list" id="scroll-area">
            {this.state.chats.map((chat, i) => {
              const BotAnswer = (chat.type === "question");        //questionである
              console.log(BotAnswer, "type")
              return(
                <div className="chat-box">
                  {BotAnswer?(
                    <>
                      <div className="avator">botです</div>
                      <div className="in-chat" key={i.toString()}>
                        {chat.text}
                      </div>
                    </>
                  ):(
                    <>
                      <div className="avator">guestです</div>
                      <div className="in-chat" key={i.toString()}>
                        {chat.text}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
          <div className="answer-list">
            {this.state.answers.map((value, i) => {
              return(
                <button className="btn-answer" key={i.toString()} onClick={() => this.selectAnswer(value.content, value.nextId)}>
                  {value.content}
                </button>

              )
            })}
          </div>
        </div>

        <Modal                                 //モーダルウィンドウ
          isOpen={this.state.open}
          // onRequestClose={this.closeMenu}
          overlayClassName={{               //モーダルウィンドウ設定クラス
            base: "base",                   //ベース
            afterOpen: "after",             //開く時
            beforeClose: "before"           //閉まる時
          }}
          // モーダルウィンドウの中のコンテンツ『アニメーションつける際に必要』
          className={{
            base: "in-base",
          }}
          closeTimeoutMS={300}
          >
          <CloseBtn 
            closeMenu={this.closeMenu}
          />

          <Form 
            closeMenu={this.closeMenu}
          />

        </Modal>


      </div>
      
    )
  }
}

export default App
