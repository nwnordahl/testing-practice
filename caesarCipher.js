const alphabet = "abcdefghijklmnopqrstuvwxyz";

function isDot(str) {
  return str === ".";
}

function isSpace(str) {
  return str === " ";
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

export default function caesarCipher(str, step) {
  let shifted = "";

  for (let i = 0; i < str.length; i++) {
    if (isDot(str[i])) shifted += ".";
    else if (isSpace(str[i])) shifted += " ";
    else if (isUpperCase(str[i])) {
      let characterIndex = alphabet.indexOf(str[i].toLowerCase());
      shifted +=
        alphabet[(characterIndex + step) % alphabet.length].toUpperCase();
    } else {
      let characterIndex = alphabet.indexOf(str[i]);
      shifted += alphabet[(characterIndex + step) % alphabet.length];
    }
  }

  return shifted;
}
