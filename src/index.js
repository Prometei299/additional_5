module.exports = function check(str, bracketsConfig) {
  let result = false, counter = 0, arr = str.split('');

  for (let i = 0; i < bracketsConfig.length; ++i) {
    let CheckOpenBackets = arr.indexOf(bracketsConfig[i][0]);
    let CheckCloseBackets = arr.indexOf(bracketsConfig[i][1]);

    if (CheckCloseBackets < CheckOpenBackets) {
      result = false;
      break;
    }
    for (let j = CheckOpenBackets; j < arr.length; ++j) {
      if (arr[j] === bracketsConfig[i][0]) {
        counter++;
      }
      if (arr[j] === bracketsConfig[i][1]) {
        counter--;
      }
    }
    if (!counter) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
}