class MovieScreen {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

export {MovieScreen};