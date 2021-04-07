class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    let [first] = this.items
    return first
  }

  last() {
    let [last] = [...this.items].reverse()
    return last
  }

  next() {
    if (this.hasNext()) {
      this.index += 1
    }
    return this.current()
  }

  current() {
    return this.items[this.index]
  }

  prev() {
    if (this.index !== 0) {
      this.index -= 1
    }
    return this.current()
  }

  hasNext() {
    return this.index < this.items.length - 1
  }
}

module.exports = Iterator
