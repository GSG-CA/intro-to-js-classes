class MyArray {
  constructor() {
    this.length = 0;
    this.size = 100;
    this.data = new Array(this.size);
  }

  pop() {
    // check if the array is empty
    if (this.length < 1) {
      return;
    }
    const lastIndex = this.length - 1;

    const deleted = this.data[lastIndex];

    this.data[lastIndex] = undefined;

    this.length--;

    return deleted;
  }

  push(item) {
    // check if the array is full
    if (this.length === this.size) {
      // double the array size
      this.size *= 2;
      // create a new array have the double size
      const newArr = new Array(this.size);
      // copy data into our new created array
      for (let i = 0; i < this.length; i++) {
        newArr[i] = this.data[i];
      }
      // make our new array is the main array (data)
      this.data = newArr;
    }
    // add the item at the end of the array
    this.data[this.length] = item;
    // increase the array size
    this.length++;
    // return the new array length
    return this.length;
  }

  shift() {
    const deleted = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;

    return deleted;
  }
}

const arr = new MyArray();

arr.push(23);
arr.push(22);
arr.push(24);
arr.push(26);
arr.push(28);
arr.pop();

console.log(arr.data);
arr.shift();
console.log(arr.data);
