"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twit = require("twit");
const twit = new Twit({
    consumer_key: 'mWpZUIBfTbQw9woUb0NBFiOC1',
    consumer_secret: 'FuG0rhBtNhpcO3MKhWljzVp0sbaXSScsFqN6pNAu9rtjDnANXv',
    access_token: '1019499453932285952-KrKT8EkTQDvqlW4oqX9Mr6yURgfo7r',
    access_token_secret: '	1VY0Hj5qklO0KZEKOJHlrlklawVCrsRaqplUp1yHghwh8'
});
const sleep = () => new Promise(async (resolve) => {
    setTimeout(resolve, 5000);
    let since_id = undefined;
    while (true) {
        const tweets = await twit.get('search/tweets', { q: '@tailor_ju' });
        console.log(tweets.data);
    }
});
sleep();
