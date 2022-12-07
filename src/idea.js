class idea {
  constructor({title, body}) {
    this.title = title;
    this.body = body;
    this.id = Date.now();
  }

  getSummary = function() {
    return `${this.title} - ${this.body}`
  }
}

module.exports = {
  idea
}
