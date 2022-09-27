## stappenplan (zelf gemaakt): 
[x] index.html, styles.css en app.js bestanden moeten in src folder;

[x] in de terminal, voer `npm init` uit; entrypoint: `src/app.js`;
[x] In de terminal, voer `npm install --save-dev parcel` uit; 
[x] In package.json: `"scripts": { "start": "parcel src/index.html", "build": "parcel build src/index.html"`;
[x] In index.html, markeer het script ale `type="module"`; 
[x] In `.gitignore`, voeg `/.parcel-cache` toe;
[x] In de terminal, voer `npm run start` uit;
[x] Klik op de `localhost` link in de terminal;
[x] In de terminal, voer `npm install give-me-a-joke` uit;
[x] In app.js, schrijf `ìmport giveMeAJoke from 'give-me-a-joke';` bovenaan;
[x]  In app.js, schrijf `giveMeAJoke.getRandomDadJoke((joke) => {
console.log('De grap is: ' + joke);`;
[x] In de terminal, voer nogmaals `npm run start` uit;



