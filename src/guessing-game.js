class GuessingGame {
  constructor() {}

  arr;

  setRange(min, max) {
    this.arr = Array.from(
      { length: max - min + 1 },
      (value, index) => min + index
    );
  }

  guess() {
    const middleIndex = Math.floor(this.arr.length / 2);
    console.log(this.arr);
    return this.arr[middleIndex];
  }

  lower() {
    this.arr = this.arr.splice(0, Math.floor(this.arr.length / 2) + 1);
  }

  greater() {
    this.arr = this.arr.splice(Math.floor(this.arr.length / 2));
  }
}

module.exports = GuessingGame;
