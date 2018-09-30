module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
    return false;
  }
 
  arr = str.split("");
  let dictionary = {};
  for (let i = 0; i < bracketsConfig.length; i++){
    const key = bracketsConfig[i][0];
    const value = bracketsConfig[i][1];
    dictionary[key] = value;
  }

  let helpStack = [];

  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(dictionary).find(key => key === arr[i])) {
     
      helpStack.push(arr[i]);
      if(arr[i] == '8'){
        helpStack.pop();
      }
      if (arr[i] == '7'){
        helpStack.pop();
      }
      if (arr[i] == '|'){
        helpStack.pop();
      }
    } else {
      const bracket = helpStack.pop();
      if (dictionary[bracket] !== arr[i]) {
        return false;
      }
    }
  }

  return true;
}
