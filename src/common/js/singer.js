export default class singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `http://y.gtimg.cn/music/photo_new/T001R500x500M000${id}.jpg?max_age=2592000`
  }
}