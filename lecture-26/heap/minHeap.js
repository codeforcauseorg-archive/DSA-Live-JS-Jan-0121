class Heap {
  #data = [];

  constructor(compare = undefined) {
    if (compare == undefined) {
      this.compare = (left, right) => left - right;
    } else {
      this.compare = compare;
    }
  }

  size = () => {
    return this.#data.length;
  };

  left = (idx) => {
    return 2 * idx + 1;
  };

  right = (idx) => {
    return 2 * idx + 2;
  };

  parent = (idx) => {
    return parseInt((idx - 1) / 2);
  };

  insert = (value) => {
    this.#data.push(value);
    this.#upheap();
  };

  #swap = (first, second) => {
    let temp = this.#data[first];
    this.#data[first] = this.#data[second];
    this.#data[second] = temp;
  };

  #upheap = () => {
    let idx = this.#data.length - 1;

    while (idx > 0) {
      let parent = this.parent(idx);
      if (this.compare(this.#data[idx], this.#data[parent]) < 0) {
        this.#swap(idx, parent);
        idx = parent;
      } else {
        break;
      }
    }
  };

  remove = () => {
    let value = this.#data[0];
    let last = this.#data.pop();

    if (this.size() > 0) {
      this.#data[0] = last;
      this.#downheap();
    }

    return value;
  };

  #downheap = () => {
    let idx = 0;

    while (idx < this.size()) {
      let [left, right] = [this.left(idx), this.right(idx)];

      let minIdx = idx;

      if (
        left < this.size() &&
        this.compare(this.#data[left], this.#data[minIdx]) < 0
      ) {
        minIdx = left;
      }

      if (
        right < this.size() &&
        this.compare(this.#data[right], this.#data[minIdx]) < 0
      ) {
        minIdx = right;
      }

      if (idx != minIdx) {
        this.#swap(idx, minIdx);
        idx = minIdx;
      } else {
        break;
      }
    }
  };
}

let heap = new Heap((left, right) => right - left);

let data = [6, 66, 45, 13, 74, 14, 52];

for (let item of data) {
  heap.insert(item);
}

while (heap.size() > 0) {
  console.log(heap.remove());
}
