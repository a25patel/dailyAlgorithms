// #Anagrams

// Input two words and see if word 2 is an anagram of word 1

psuedo
// 1. parse both words
// 2. if index of word 2 matches any index of word 1 delete both letters out of the array
// 3a. if no match - return anagram = false
// 3b. if match move on to the next index of word 2

function anagram(word1, word2){
  word1 = word1.split('');
  word2 = word2.split('');
  console.log(word1 + ' ' + word2);
}

anagram('hello', 'goodbye');
