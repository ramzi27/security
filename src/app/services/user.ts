export class User {
    name: string;
    birthDate: string;
    secretWord: string;
    imageUrl?: string;
    id: number;
    imageCount: number;

    constructor(name: string, birthDate: string, secretWord: string, imageUrl: string) {
        this.name = name;
        this.birthDate = birthDate;
        this.secretWord = secretWord;
        this.imageUrl = imageUrl;
    }
}
