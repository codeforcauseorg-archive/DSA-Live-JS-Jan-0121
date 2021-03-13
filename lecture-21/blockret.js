class Hello {
    constructor() {
        this.val = 7;
    }

    update = () => {
        let [ref, happy] = [6, 10];
        this.val = ref;
    }
}