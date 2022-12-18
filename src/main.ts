
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import * as fs from 'node:fs/promises';


let exit = false
let movieLibrary = ["Zoolander", "Crank", "Pitch Perfect", "Nutty Professor", "Lion King"]

const randomMovie = function () {
  return movieLibrary[Math.floor(Math.random() * movieLibrary.length)]
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
