import { MovieScreen } from './screen';
import { IMAXScreen } from './Imax';
import { NormalScreen } from './normalScreen';

test("Check Screen Name", () => {
    let screen = new MovieScreen("Sathyam");
    let expected_value = "Sathyam";
    expect(screen.getName()).toEqual(expected_value);
})

test("IMAX Screen Cost", () => {
    let imaxScreen = new IMAXScreen("Santham", 400);
    expect(imaxScreen.getScreenCost()).toBe(400);
    expect(imaxScreen.getName()).toBe("Santham");
});

test("Normal Screen Cost", ()=>{
    let normalScreen = new NormalScreen("Sathyam", 120);
    expect(normalScreen.getScreenCost()).toBe(120);
})