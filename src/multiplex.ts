import { IMAXScreen } from "./Imax";
import { NormalScreen } from "./normalScreen";
import { ThreeDMovie } from "./threeDMovie";
import { MovieRecord } from "./movieRecord";
import { TicketCounter } from "./ticketCounter";
import { TwoDMovie } from "./TwoDMovie";


class Multiplex implements TicketCounter {
    private movies: Array<any>;
    private screens: Array<any>;
    private movieRecords: Array<MovieRecord>;
    private IMAXScreenCost: number = 400;
    private normalScreenCost: number = 120;
    private extraTwoDCost: number = 0;
    private extraThreeDCost: number = 30;

    constructor(){
        this.movies = [];
        this.screens = [];
        this.movieRecords = [];
    }

    addScreen(screenName: string, screenType: string): void{
        if(screenType === "IMAX"){
            let screen = new IMAXScreen(screenName, this.IMAXScreenCost);
            this.screens.push(screen);
        }
        else if(screenType === "Normal" ){
            let screen = new NormalScreen(screenName, this.normalScreenCost);
            this.screens.push(screen);
        }
        else{
            console.log("No screen found " + screenName);
        }
    }

    addMovie(movieName: string, screenName: string, type: string): void{
        let movie;
        if(type === "2D"){
            movie = new TwoDMovie(movieName, this.extraTwoDCost);
            this.movies.push(movie);
        }
        else if(type === "3D"){
            movie = new ThreeDMovie(movieName, this.extraThreeDCost);
            this.movies.push(movie);
        }
        else{
            console.log("No Movie Added " + movieName);
        }

        let ticket = new MovieRecord(movieName, screenName);
        this.movieRecords.push(ticket);
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
        let cost: number = 0;
        this.movieRecords.forEach((record) => {
            if(record.getMovieName() === movieName){
                let screenName: string = record.getScreenName();
                this.screens.forEach((screen) => {
                    if(screen.getName() === screenName){
                        cost += screen.getScreenCost();
                    }
                });
            }
        });

        this.movies.forEach((movie) => {
            let name: string = movie.getName();
            if(name === movieName){
                cost += movie.getExtraCost();
            }
        });
        
        return cost;
    }


}

export {Multiplex};