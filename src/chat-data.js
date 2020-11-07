export const ChatData = {
  "initial": {
      answers: [
          {content: "成果物をみたい", nextId: "portfolio"},
          {content: "ブログをみたい", nextId: "https://kajita-blog-site.netlify.app/"},
          {content: "お問い合わせをしたい", nextId: "message"},
      ],
      question: "ご用件をお伺い致します",
  },
  "portfolio": {
      answers: [
          {content: "ポートフォリオをみたい", nextId: "https://portfolio-helloworld.herokuapp.com/"},
          {content: "GitHubをみたい", nextId: "https://github.com/sho1374k"},
          {content: "最初に戻る", nextId: "initial"}
      ],
      question: "どちらをご覧になりますか？",
  },
  "message": {
      answers: [
          {content: "フォームで問い合わせる", nextId: "contact"},
          {content: "SNSでお問い合わせる", nextId: "sns"},
          {content: "最初に戻る", nextId: "initial"}
      ],
      question: "どちらからお問い合わせますか？",
  },
  "sns": {
      answers: [
          {content: "DMする(instagram)", nextId: "https://www.instagram.com/sho1374k/?hl=ja"},
          {content: "DMする(twitter)", nextId: "https://twitter.com/sho4771k"},
          {content: "最初の質問に戻る", nextId: "initial"}
      ],
      question: "どちらからお問い合わせしますか？",
  },
}
