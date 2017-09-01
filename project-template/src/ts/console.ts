class Apple {
    constructor(name:string) {
        this._Name = name;
    }

    private _Name:string;
    public get Name() : string {
        return this._Name
    }

}

let appleInstance:Apple = new Apple("Andrew");

let apple2 : Apple = new Apple("lol");

console.log(appleInstance.Name);