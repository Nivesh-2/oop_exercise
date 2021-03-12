import { Movie } from "./movie";

class MovieScreen {
    protected name: string;
    protected movie: Movie;

    constructor(name: string, movie: Movie){
        this.name = name;
        this.movie = movie;
    }

    public getName(): string{
        return this.name;
    }

    public getMovie(): Movie {
        return this.movie;
    }
}

export {MovieScreen};