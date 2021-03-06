import { Movie } from "../domain/movie";
import { ThreeDMovie } from "../domain/threeDMovie";
import { TwoDMovie } from "../domain/twoDMovie";

test("Check Movie Name", () => {
    let movie = new Movie("Jungle Book");
    expect(movie.getName()).toEqual("Jungle Book");
});

test("2D Movie Cost", () => {
    let twoDMovie = new TwoDMovie("Jungle Book", 0);
    expect(twoDMovie.getExtraCost()).toBe(0);
});

test("3D Movie Cost",  () =>{
    let threeDMovie  = new ThreeDMovie("Jungle Book", 30);
    expect(threeDMovie.getExtraCost()).toBe(30);
})