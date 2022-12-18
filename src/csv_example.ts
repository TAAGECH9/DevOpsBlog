import { readFile } from 'fs/promises'

let movieList: [string]

try {
    const filePath = new URL('./assets/movies.csv', import.meta.url)
    console.log("Blablablabla")
    let content = await readFile(filePath, { encoding: 'utf8' })

    console.log(content)
} catch (err: any) {
    console.log(`Some weird error apperared ${err.msg}`)
}
