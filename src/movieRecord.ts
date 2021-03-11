class MovieRecord {
    private movieName: string;
    private screenName: string;

    constructor(movieName: string, screenName: string){
        this.movieName = movieName;
        this.screenName = screenName;
    }

    getMovieName(): string{
        return this.movieName;
    }

    getScreenName(): string {
        return this.screenName;
    }
}

export {MovieRecord};