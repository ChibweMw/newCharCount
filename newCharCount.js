function countLetters (string){
  var newString = string.replace(/ /g, '').toLowerCase();
  var sorted = {};
  for(var i = 0; i < newString.length; i++){
    var character = newString.charAt(i);
    if (sorted[character]) {
      sorted[character][0]++;
      sorted[character].push(i);
    } else {
      //happens on first encounter of a character
      sorted[character] = [1, i];
    }
  }
  return sorted;
}
console.log(countLetters("Chibwe Sherri Kevin"));

// {
//   j: [0, 1],
//   f: [1, 3],
// }