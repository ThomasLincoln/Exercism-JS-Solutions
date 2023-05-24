export let line;

export function frontDoorResponse(line) {
  console.log(line[0])
  return line[0];
}


export let word;
export function frontDoorPassword(word) {
  const lowerCaseWord = word.toLowerCase();
  const newWord = lowerCaseWord.replace(lowerCaseWord[0], lowerCaseWord[0].toUpperCase())
  console.log(newWord)

  return newWord;
}

export function backDoorResponse(line) {
  let aux = line.trim();
  return aux[(aux.length)-1]
}


export function backDoorPassword(word) {
  const newWord = word.replace(word[0], word[0].toUpperCase());
  console.log(newWord);
  return `${newWord}, please`
}
