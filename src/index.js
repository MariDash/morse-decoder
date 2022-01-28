const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr.split("");
  let result = [];
  for (let i = 0; i < expr.length / 10; i++) {
    let newArr = [];
    let part = arr.splice(0, 10);
    if (part[0] == "*") {
      result.push(" ");
    } else {
      for (let i = 0; i < 5; i++) {
        let two = part.splice(-2).join("");
        if (two == "10") {
          newArr.push(".");
        } else if (two == "11") {
          newArr.push("-");
        }
      }
      let key = newArr.reverse().join("");
      let letter = MORSE_TABLE[key];
      result.push(letter);
      let answer = result.join("");
      if (answer.length == expr.length / 10) {
        return answer;
      }
    }
  }
}

module.exports = {
  decode,
};
