const { createInterface } = require('readline')
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('create <fileName> <text> | exit');
rl.prompt()

rl.on('line', input => {
  let [commandText, ...remaining] = input.split(' ')
  let [fileName, ...fileText] = remaining
  let text = fileText.join(' ')

  switch (commandText) {
    case "exit":
      console.log('TODO: Exit');
      break;
    case "create":
      console.log(`TODO: Create File ${fileName}`);
      console.log('file contents:', text);
      break;
    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt()
})
