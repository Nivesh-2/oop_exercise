import { MovieScreen } from "./screen";

class NormalScreen extends MovieScreen {
    private ScreenCost: number;

    constructor(name: string, cost: number){
        super(name);
        this.ScreenCost = cost;
    }

    getScreenCost(): number {
        return this.ScreenCost;
    }
}

export {NormalScreen};