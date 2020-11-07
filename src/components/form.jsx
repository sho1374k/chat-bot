import React from "react";

export class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      info: "",
    }
    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputInfo = this.inputInfo.bind(this)

    this.submitForm = this.submitForm.bind(this)
  }

  inputName(event){
    this.setState({
      name: event.target.value
    })
  }
  inputEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  inputInfo(event){
    this.setState({
      info: event.target.value
    })
  }

  submitForm(){
    const {name, email, info} = this.state;         //コンストラクター読み込み

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
      alert("送信が完了しました")
      this.setState({                   //再度入力できるようにクリアにし更新保存
        name: "",
        email: "",
        info: "",
      })
      return this.props.closeMenu()     //モーダル閉じる関数を返して終了
    })
  }

  render(){
    return(
      <>
        <label>お名前<span>必須</span></label>
        <input 
          type="text" 
          name="name"
          placeholder="山田太郎" 
          value={this.state.name}
          onChange={this.inputName}
        >
        </input>

        <label>メールアドレス<span>必須</span></label>
        <input 
          type="text" 
          name="email"
          placeholder="例）guest@example.com" 
          value={this.state.email}
          onChange={this.inputEmail}
        >
        </input>

        <label>お問い合わせ項目<span>必須</span></label>
        <textarea 
          name="content" 
          rows="5" 
          placeholder="お問合せ内容を入力"
          value={this.state.info}
          onChange={this.inputInfo}
        >
        </textarea>
        <button 
          type="submit"
          onClick={this.submitForm}
        >
          送信
        </button>
      </>
    )
  }
}