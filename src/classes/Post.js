export default class Post {
  constructor(title, anounce, text) {
    this.title = title,
    this.anounce = anounce,
    this.text = text,
    this.date = new Date().toLocaleDateString(),
    this.updateDate = new Date().toLocaleDateString(),
    this.comments = {}
  }
}