export default class Comment {
  constructor(author, text) {
    this.author = author ? author : 'Anonym'
    this.text = text
    this.date = new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString()
  }
}