class CustomStack {

    #data = []

    push(value) {
        this.#data.push(value);
    }

    pop() {
        return this.#data.pop();
    }

    get top() {
        return this.#data[this.#data.length-1];
    }
}

let st = new CustomStack();

st.push(10);
st.push(20);
st.push(50);
st.push(1);

for (let index = 0; index < 4; index++) {
    console.log(st.pop());
}
