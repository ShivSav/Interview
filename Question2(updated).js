
let input = prompt();
var alphabets26 = 'qwertyuiopasdfghjklzxcvbnm';
input = input.toLowerCase();
let distinctChar = 0;
for (let eachchar = 0; eachchar < input.length; eachchar++) {
  var letter = alphabets26[eachchar];
  if (input.indexOf(letter) > -1)
    distinctChar++;
}

if (distinctChar == 26)
  console.log('All letters found at least once');
else
  console.log('Few letters missing');