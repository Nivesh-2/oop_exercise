import { MovieScreen } from '../domain/screen';
import { IMAXScreen } from '../domain/imax';
import { NormalScreen } from '../domain/normalScreen';
import { Movie } from '../domain/movie';
import { TwoDMovie } from '../domain/twoDMovie';
import { ThreeDMovie } from '../domain/threeDMovie';

test("Check Screen Name", () => {
    let movie = new Movie("Jigarthanda");
    let screen = new MovieScreen("Sathyam", movie);
    let expected_value = "Sathyam";
    expect(screen.getName()).toEqual(expected_value);
})

test("IMAX Screen Cost", () => {
    let movie = new Movie("Jigarthanda");
    let twoDMovie = new TwoDMovie("Jingarthanda", 0);
    let imaxScreen = new IMAXScreen("Santham", twoDMovie, 400);
    expect(imaxScreen.getScreenCost()).toBe(400);
    expect(imaxScreen.getName()).toBe("Santham");
});

test("Normal Screen Cost", ()=>{
    // let movie = new Movie("Jigarthanda");
    let threeDMovie = new ThreeDMovie("Jungle Book", 30);
    let normalScreen = new NormalScreen("Sathyam", threeDMovie, 120);
    // console.log(normalScreen.getMovie());
    expect(normalScreen.getScreenCost()).toBe(120);
})