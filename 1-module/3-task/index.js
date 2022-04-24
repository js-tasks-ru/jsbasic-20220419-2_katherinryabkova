function ucFirst(str) {
  if (str === "") {
    return "";
  } else {
    let result = str.substr(1, str.length);
    return `${str[0].toUpperCase()}${result}`;
  }
}
