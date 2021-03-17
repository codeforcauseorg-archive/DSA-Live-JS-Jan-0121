function fibo(n) {
  if (n < 2) {
    return n;
  }

  let result = fibo(n - 1) + fibo(n - 2);

  return result;
}

function fiboDP(n, memory = []) {
  if (n < 2) {
    return n;
  }
  
  if (memory[n]) {
    return memory[n];
  }

  let result = fiboDP(n - 1, memory) + fiboDP(n - 2, memory);

  memory[n] = result;

  return result;
}

function fiboBigDP(n, memory = []) {
  if (n < 2) {
    return BigInt(new String(n));
  }

  if (memory[n]) {
    return memory[n];
  }

  let result = fiboBigDP(n - 1, memory) + fiboBigDP(n - 2, memory);

  memory[n] = result;

  return result;
}

let n = 3000;

let memory = new Array(n + 1);

console.log(fiboBigDP(n, memory).toString());
