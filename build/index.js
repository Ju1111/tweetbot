"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twit = require("twit");
const twit = new Twit({
    consumer_key: 'ysWEFpFmPhYVd68uYRRokazrf',
    consumer_secret: '6gETBEsL3DP5Nr0SmR8oKNxSx4rvjz9UpNaUOggQ8wKxq74BjZ',
    access_token: '1019499453932285952-favUGdPb6qdfphFv0canM6KkHRRw3n',
    access_token_secret: 'Klox3DFEs6skw4PqOJ1uoRGSz7hDz6kQuSAAc2wp7b0cN'
});
const sleep = () => new Promise(async (resolve) => {
    setTimeout(resolve, 20000);
    let since_id = undefined;
    while (true) {
        const tweets = await twit.get('search/tweets', { q: '@tailor_ju', since_id });
        console.log(tweets.data.statuses[0].text);
    }
});
sleep();
