class PostModel {
  constructor ({ title, description, claps, updateAt, userId }) {
    this.title = title
    this.description = description
    this.claps = claps || 0
    this.createdAt = new Date().toISOString()
    this.updateAt = updateAt || null
    this.userId = userId
  }
}

export default PostModel