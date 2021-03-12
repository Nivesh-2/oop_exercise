import { Multiplex } from "../domain/multiplex";

test("Jungle Book Movie Cost Check ", ()=>{
    let multiplex = new Multiplex();
    multiplex.addScreen(multiplex.createImaxScreen("Santham", "Jungle Book"));
    multiplex.addMovie(multiplex.createThreeDMovie("Jungle Book"));
    let cost: number = multiplex.findTicketCost("Jungle Book");
    expect(cost).toBe(430);
});

test("Jigarthanda Movie Cost Check ", ()=>{
    let multiplex = new Multiplex();
    multiplex.addScreen(multiplex.createImaxScreen("Santham", "Jungle Book"));
    multiplex.addScreen(multiplex.createNormalScreen("Sathyam", "Jigarthanda"));
    multiplex.addMovie(multiplex.createThreeDMovie("Jungle Book"));
    multiplex.addMovie(multiplex.createTwoDMovie("Jigarthanda"));
    let cost: number = multiplex.findTicketCost("Jigarthanda");
    expect(cost).toEqual(120);
});

test("Movie List", () =>{
    let multiplex = new Multiplex();
    multiplex.addScreen(multiplex.createImaxScreen("Santham", "Jungle Book"));
    multiplex.addScreen(multiplex.createNormalScreen("Sathyam", "Jigarthanda"));
    multiplex.addMovie(multiplex.createTwoDMovie("Jigarthanda"));
    multiplex.addMovie(multiplex.createThreeDMovie("Jungle Book"));
    let movies = multiplex.getMovies();
    expect(movies).toEqual(["Jigarthanda", "Jungle Book"]);
});

test("Screen List", () =>{
    let multiplex = new Multiplex();
    multiplex.addScreen(multiplex.createImaxScreen("Santham", "Jungle Book"));
    multiplex.addScreen(multiplex.createNormalScreen("Sathyam", "Jigarthanda"));
    multiplex.addMovie(multiplex.createThreeDMovie("Jungle Book"));
    multiplex.addMovie(multiplex.createTwoDMovie("Jigarthanda"));
    let movies = multiplex.getScreens();
    expect(movies).toEqual(["Santham", "Sathyam"]);
});