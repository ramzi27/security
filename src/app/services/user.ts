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
    dbType?: DB_TYPES;

    constructor(id: number, dbType: DB_TYPES) {
        this.id = id;
        this.dbType = dbType;
    }
}
