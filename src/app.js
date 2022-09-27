import giveMeAJoke from 'give-me-a-joke'; // kan ook met "require"

giveMeAJoke.getRandomDadJoke((joke) => {
    console.log('De grap is: ' + joke);
});

console.log('Ik kom uit app.js. Wordt ik geladen?');