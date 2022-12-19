
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { movieList } from './csv_example.js';


let exit = false

const randomMovie = function () {
  return movieList[Math.floor(Math.random() * movieList.length)]
}

const main = async function () {
  while (!exit) {
    console.clear()
    console.log('------------- Roulett says -------------')
    console.log(randomMovie())
    console.log('----------------------------------------\n')
    exit = await anotherOne()
  }
}

const anotherOne = async function () {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("Another Movie tipp? (y/n)\n");
  rl.close();
  if (answer == 'y') {
    return false
  } else {
    return true
  }
}

main()
