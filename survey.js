const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thanks for the feedback!`);
  rl.question("What name do your friends call you? ", (answer2) => {
    console.log(`Great name, ${answer2}!`);
    rl.question("What is your favourite Meal? ", (answer3) => {
      console.log(`Mmm, ${answer3} sounds tasty right about now!`);
      rl.question("What is your favourite sport to watch? ", (answer4) => {
        console.log(`${answer4} is not a real sport, is it ${answer2}?`)
        rl.question("What is your favourite genre of music? ", (answer5) => {
          console.log(`Awesome ${answer2}! I enjoy ${answer5} as well!`)
          rl.question("What's your favourite dog breed? ", (answer6) => {
            console.log(`${answer6} are great dogs!`)
            rl.question("What is your favourite season? ", (answer7) => {
              console.log(`${answer7} is a great time of year!`)
              rl.question("What's your favourite movie? ", (answer7) => {
                console.log(`I haven't seen it. ${answer7}'s trailer looked bad.`)
                console.log(`Great getting to know you ${answer2}`)
                rl.close
              });
            });
          });
        });
      });
    });
  });
});
