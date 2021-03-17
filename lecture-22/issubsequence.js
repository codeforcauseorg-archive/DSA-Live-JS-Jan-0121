var isSubsequence = function (s, t) {
  let memory = [];

  for (let i = 0; i <= s.length; i++) {
    memory.push(new Array(t.length + 1));
  }

  return isSubsequenceItr(s, t, memory);
};

// var isSubsequenceRec = function (subseq, target, slen, tlen, memory) {
//   if (tlen == 0 && slen != 0) {
//     return false;
//   }

//   if (slen == 0) {
//     return true;
//   }

//   if (memory[slen][tlen] != undefined) {
//     return memory[slen][tlen];
//   }

//   let isSubseq;

//   if (subseq[slen - 1] == target[tlen - 1]) {
//     isSubseq = isSubsequenceRec(subseq, target, slen - 1, tlen - 1, memory);
//   } else {
//     isSubseq = isSubsequenceRec(subseq, target, slen, tlen - 1, memory);
//   }

//   memory[slen][tlen] = isSubseq;

//   return isSubseq;
// };

var isSubsequenceItr = function (subseq, target, memory) {
  for (let slen = 0; slen <= subseq.length; slen++) {
    for (let tlen = 0; tlen <= target.length; tlen++) {
      if (tlen == 0 && slen != 0) {
        memory[slen][tlen] = false;
        continue;
      } 

      if (slen == 0) {
        memory[slen][tlen] = true;
        continue;
      }

      let isSubseq;

      if (subseq[slen - 1] == target[tlen - 1]) {
        isSubseq = memory[slen - 1][tlen - 1];
      } else {
        isSubseq = memory[slen][tlen - 1];
      }
      memory[slen][tlen] = isSubseq;
    }
  }

  return memory[subseq.length][target.length];
};
