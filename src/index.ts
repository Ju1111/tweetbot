import * as Twit from 'twit'
import { resolve } from 'url'

const twit = new Twit({
  consumer_key:         'ysWEFpFmPhYVd68uYRRokazrf',
  consumer_secret:      '6gETBEsL3DP5Nr0SmR8oKNxSx4rvjz9UpNaUOggQ8wKxq74BjZ',
  access_token:         '1019499453932285952-favUGdPb6qdfphFv0canM6KkHRRw3n',
  access_token_secret:  'Klox3DFEs6skw4PqOJ1uoRGSz7hDz6kQuSAAc2wp7b0cN'
})

const getTweet = () => new Promise( async (resolve) => {
    const stream = twit.stream('statuses/filter', { track: '@tailor_ju' })

    stream.on('tweet', (tweet: Twit.Twitter.Status) => reactToTweet(tweet))
})

const reactToTweet = (tweet) => new Promise( async (resolve) => {
    const text = tweet.text
    const userScreenName = tweet.user.screen_name
    if (text.indexOf('bugs') >= 0) {
            twit.post('statuses/update', {
                status: `@${userScreenName} ${Math.floor(Math.random() * 201)} bugs in the code`
        })
    }
})

getTweet()