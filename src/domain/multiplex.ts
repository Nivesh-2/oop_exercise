import { IMAXScreen } from "./imax";
import { Movie } from "./movie";
import { NormalScreen } from "./normalScreen";
import { ThreeDMovie } from "./threeDMovie";
import { TicketCounter } from "./ticketCounter";
import { TwoDMovie } from "./twoDMovie";

class Multiplex implements TicketCounter {
    private movies: Array<any>; // any because movie can be 2D and 3D
    private screens: Array<any>; // any because screen can be IMAX or Normal
    private IMAXScreenCost: number = 400;
    private normalScreenCost: number = 120;
    private extraTwoDCost: number = 0;
    private extraThreeDCost: number = 30;

    constructor(){
        this.movies = [];
        this.screens = [];
    }

    addScreen(screen: any): void{ // any because screen can be IMAX or Normal
        this.screens.push(screen);
    }

    addMovie(movie: any): void{ // any because movie can be 2D and 3D
        this.movies.push(movie);
    }

    createImaxScreen(screenName: string, movieName: string): IMAXScreen{
        let screen = new IMAXScreen(screenName, new Movie(movieName), this.IMAXScreenCost);
        return screen;
    }

    createNormalScreen(screenName: string, movieName: string): NormalScreen{
        let screen = new NormalScreen(screenName, new Movie(movieName), this.normalScreenCost);
        return screen;
    }

    createTwoDMovie(movieName: string): TwoDMovie{
        return new TwoDMovie(movieName, this.extraTwoDCost);
    }

    createThreeDMovie(movieName: string): ThreeDMovie{
        return new ThreeDMovie(movieName, this.extraThreeDCost);
    }

    getMovies(){
        let movieList: Array<string> = [];
        this.movies.forEach((movie) => {
            movieList.push(movie.getName());
        })

        return movieList;
    }

    getScreens() {
        let screenList: Array<string> = [];
        this.screens.forEach((s)=> {
            screenList.push(s.getName());
        })

        return screenList;
    }

    changeIMAXScreenCost(cost: number){
        this.IMAXScreenCost = cost;
    }

    changeNormalScreenCost(cost: number){
        this.normalScreenCost = cost;
    }

    changeExtraThreeDCost(cost: number){
        this.extraThreeDCost = cost;
    }

    changeExtraTwoDCost(cost: number){
        this.extraTwoDCost = cost;
    }

    findTicketCost(movieName: string): number{
        let cost:number = 0;
        this.screens.forEach((s) => {
            let movie = s.getMovie().getName();
            if(movie === movieName){
                cost += s.getScreenCost();
            }
        });

        this.movies.forEach((m) => {
            if(m.getName() === movieName){
                cost += m.getExtraCost();
            }
        });

        return cost;
    }
}

export {Multiplex};