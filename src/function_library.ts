import { stdin as input, stdout as output } from 'node:process'
import { movieList } from './movie_list.js';
import * as readline from 'node:readline/promises'

export const randomMovie = function () {
    return movieList[Math.floor(Math.random() * movieList.length)]
}

export const anotherOne = async function () {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question("Another Movie tipp? (y/n)\n");
    rl.close();
    if (answer == 'y') {
        return false
    } else {
        return true
    }
}
