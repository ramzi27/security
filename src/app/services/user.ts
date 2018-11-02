export type DB_TYPES = { 'whitelist', 'blacklist' };

export class User {
    name: string;
    birthDate: string;
    secretWord: string;
    id: number;
    numOfChildren: number;
    imageCount?: number;
    favCity: string;
    favCarType: string;


    constructor(name: string, birthDate: string, secretWord: string, id: number, numOfChildren: number, imageCount: number, favCity: string, favCarType: string) {
        this.name = name;
        this.birthDate = birthDate;
        this.secretWord = secretWord;
        this.id = id;
        this.numOfChildren = numOfChildren;
        this.imageCount = imageCount;
        this.favCity = favCity;
        this.favCarType = favCarType;
    }
}
