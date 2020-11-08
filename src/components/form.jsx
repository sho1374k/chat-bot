import React from "react";

export class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      info: "",
      error: {
        name: false,
        email: false,
        info: false,
        format: false,
      }
    }
    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputInfo = this.inputInfo.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  inputName(event){
    this.setState({
      name: event.target.value,
    })
  }
  inputEmail(event){
    this.setState({
      email: event.target.value,
    })
  }
  inputInfo(event){
    this.setState({
      info: event.target.value,
    })
  }

  submitForm(){
    const {name, email, info}  = this.state;         //コンストラクター読み込み
    const format = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (name === "") {
      if (email === "") {
        if (info === "") {
          this.setState({ error: { name: true, email: true, info: true}})
          console.log(1)
        }else{
          this.setState({ error: { name: true, email: true, info: false}})
          console.log(2)
        }
      } else {
        if (info === "") {
          this.setState({ error: { name: true, email: false, info: true}})
          console.log(3)
        } else {
          this.setState({ error: { name: true, email: false, info: false}})
          console.log(4)
        }
      }
    } else if (email === "") {
      if (info === "") {
        this.setState({ error: { name: false, email: true, info: true}})
        console.log(5)
      }else{
        this.setState({ error: { name: false, email: true, info: false}})
        console.log(6)
      }
    }else if (info === "") {
      this.setState({ error: { name: false, email: false, info: true}})
      console.log(7)
    }else if (!(format.test(email))) {
      this.setState({ error: { format: true}})
    } else {
      const payload = {                              //送信するフォーマット指定
        text: "『チャットボットからのお問い合わせです』\n" +
              "名前 : \n" + name + "\n\n" +
              "メール : \n" + email + "\n\n" +
              "お問い合わせ内容 : \n" + info
      }
      // スラックのURL
      const url = "https://hooks.slack.com/services/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"
      // JSON
      fetch(url, {
        method: "POST",                    // 通信
        body: JSON.stringify(payload)      //JSON形式にエンコード(JSONデータに変換する)して送信
      }).then(() => {                     //成功したら関数
        alert("送信が完了しました。ご連絡をお待ちください。")
        this.setState({                   //再度入力できるようにクリアにし更新保存
          name: "",
          email: "",
          info: "",
          error: {
            name: false,
            email: false,
            info: false,
          }
        })
        return this.props.closeMenu()     //モーダル閉じる関数を返して終了
      })
    }
  }

  render(){
    const error = this.state.error
    return(
      <div className="form-content">
        <label className="input-label">
          お名前
          <span>必須</span>
          { error.name && <span className="wrapper">※お名前を入力してください</span>}
        </label>
        <input 
          className="name-box"
          type="text" 
          name="name"
          placeholder="佐々木琲世" 
          value={this.state.name}
          onChange={this.inputName}
        >
        </input>
        <label className="input-label">
          メールアドレス
          <span>必須</span>
          { error.email && <span className="wrapper">※メールアドレスを入力してください</span>}
          { error.format &&  <span className="wrapper">※フォーマットが正しくありません</span>}
        </label>
        <input 
          className="email-box"
          type="email" 
          name="email"
          placeholder="例）haise@ghoul.com" 
          value={this.state.email}
          onChange={this.inputEmail}
        >
        </input>
        <label className="input-label">
          お問い合わせ項目
          <span>必須</span>
          { error.info && <span className="wrapper">※内容を入力してください</span>}
        </label>
        <textarea 
          className="text-box"
          name="info" 
          rows="5" 
          placeholder="お問合せ内容を入力してください"
          value={this.state.info}
          onChange={this.inputInfo}
        >
        </textarea>
        <button
          className="submit-btn"
          type="submit"
          onClick={this.submitForm}
        >
          送信
        </button>
      </div>
    )
  }
}