export function taskFirst() {
  // Variables declared with 'const'.
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Variables declared with 'let'.
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

