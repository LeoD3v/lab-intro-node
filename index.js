class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let highestValue = this.items.sort((a, b) => a - b);
    return highestValue[highestValue.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let highestValue = this.items.sort((a, b) => a - b);

    return highestValue[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let sum = 0;
    this.items.map((e) => (sum += e));
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = 0;
    this.items.map((e) => (sum += e));
    return sum / this.items.length;
  }
}

module.exports = SortedList;
