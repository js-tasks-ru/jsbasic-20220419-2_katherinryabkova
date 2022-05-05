function camelize(str) {
  let words = str.split('-');
  let capitalizedWords = words.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  return capitalizedWords.join('');
}