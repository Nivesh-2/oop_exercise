import { Multiplex } from "./multiplex";

test("Jungle Book Movie Cost Check ", ()=>{
    let multiplex = new Multiplex();
    multiplex.addScreen("Santham", "IMAX");
    multiplex.addMovie("Jungle Book", "Santham", "3D");
    let cost: number = multiplex.findTicketCost("Jungle Book");
    expect(cost).toBe(430);
});

test("Jigarthanda Movie Cost Check ", ()=>{
    let multiplex = new Multiplex();
    multiplex.addScreen("Santham", "IMAX");
    multiplex.addScreen("Sathyam", "Normal");
    multiplex.addMovie("Jigarthanda", "Sathyam", "2D");
    multiplex.addMovie("Jungle Book", "Santham", "3D");
    let cost: number = multiplex.findTicketCost("Jigarthanda");
    expect(cost).toEqual(120);
});

test("Movie List", () =>{
    let multiplex = new Multiplex();
    multiplex.addScreen("Santham", "IMAX");
    multiplex.addScreen("Sathyam", "Normal");
    multiplex.addMovie("Jigarthanda", "Sathyam", "2D");
    multiplex.addMovie("Jungle Book", "Santham", "3D");
    let movies = multiplex.getMovies();
    expect(movies).toEqual(["Jigarthanda", "Jungle Book"]);
});

test("Screen List", () =>{
    let multiplex = new Multiplex();
    multiplex.addScreen("Santham", "IMAX");
    multiplex.addScreen("Sathyam", "Normal");
    multiplex.addMovie("Jigarthanda", "Sathyam", "2D");
    multiplex.addMovie("Jungle Book", "Santham", "3D");
    let movies = multiplex.getScreens();
    expect(movies).toEqual(["Santham", "Sathyam"]);
});