export const ChatData = {
  "initial": {
      answers: [
          {content: "成果物を見る", nextId: "portfolio"},
          {content: "ブログを見る", nextId: "https://kajita-blog-site.netlify.app/"},
          {content: "お問い合わせ", nextId: "message"},
      ],
      question: "ご用件を伺います",
  },
  "portfolio": {
      answers: [
          {content: "Portfolio", nextId: "https://portfolio-helloworld.herokuapp.com/"},
          {content: "GitHub", nextId: "https://github.com/sho1374k"},
          {content: "最初に戻る", nextId: "initial"}
      ],
      question: "どちらをご覧になりますか？",
  },
  "message": {
      answers: [
          {content: "フォーム", nextId: "contact"},
          {content: "SNS", nextId: "sns"},
          {content: "最初に戻る", nextId: "initial"}
      ],
      question: "どちらにしますか？",
  },
  "sns": {
      answers: [
          {content: "Instagram", nextId: "https://www.instagram.com/sho1374k/?hl=ja"},
          {content: "Twiiter", nextId: "https://twitter.com/sho4771k"},
          {content: "最初に戻る", nextId: "initial"}
      ],
      question: "どちらにしますか？",
  },
}
