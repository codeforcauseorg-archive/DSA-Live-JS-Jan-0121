// https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    
    let heap = new Heap((first, second) => {
        let [x1, y1] = first;
        let [x2, y2] = second;
        
        return Math.sqrt(x1*x1 + y1* y1) - Math.sqrt(x2*x2 + y2* y2);
    })
    
    
    for(let point of points){
        heap.insert(point);
    }
    
    let result = [];
    
    for(let i=0; i<k; i++){
        result.push(heap.remove());
    }
    
    return result;
    
};


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