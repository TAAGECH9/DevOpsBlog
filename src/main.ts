import { randomMovie, anotherOne } from './function_library.js'

let exit = false

const main = async function () {
  while (!exit) {
    console.clear()
    console.log('------------- Roulett says -------------')
    console.log(randomMovie())
    console.log('----------------------------------------\n')
    exit = await anotherOne()
  }
}

main()
