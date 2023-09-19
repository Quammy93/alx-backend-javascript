process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const Mcwell = process.stdin.read();

  if (Mcwell) {
    process.stdout.write(`Your name is: ${Mcwell}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
