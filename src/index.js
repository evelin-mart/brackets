module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let pairs = {};
  bracketsConfig.forEach((pair) => {
    pairs[pair[0]] = pair[1];
  });

  for (i = 0; i < str.length; i++) {
    let bracket = str[i];
    let openBracket = stack[stack.length - 1];

    if (pairs[bracket] === bracket) {
      if (openBracket === bracket) {
        stack.pop();
        continue;
      } else {
        stack.push(bracket);
        continue;
      }
    }

    if (Object.keys(pairs).includes(bracket)) {
      stack.push(bracket);
    }

    if (Object.values(pairs).includes(bracket)) {
      if (pairs[openBracket] === bracket) {
        stack.pop();
      } else return false;
    }
  }

  return !stack.length;
};
