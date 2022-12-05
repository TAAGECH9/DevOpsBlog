# Base Application Design


## Methods
### CRUD Operations

| Type   | Method         | Payload (data_model) | Response (data_model) |
| ------ | -------------- | -------------------- | --------------------- |
| GET    | randomMovie)() | none                 | Movie                 |
| GET    | movie()        | Movie                | Movie                 |
| POST   | addMovie()     | Movie                | Movie                 |
| UPDATE | updateMovie    | Movie                | Movie                 |
| DELETE | deleteMovie()  | Movie                | confirmation Msg      |


## Diagram

```mermaid
    classDiagram
        MovieRoulett "1" -->"1..*" Movie : Uses
        class Movie{
            +Number id
            +String title
        }
        class MovieRoulett {
            -Movie[] movieList
            +getRandomMovie()
            +getMovie(Movie)
            +addMovie(Movie)
            +delMovie(Movie)
            +updateMovie(Movie)
        }
```

## Data Types

```ts
interface Movie {
    id: number
    name: string
}
```F
