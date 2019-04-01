export class User {
    id: string;
    password: string;
    favorites: any[];

    constructor(userName: string, password: string) {
        this.id = userName;
        this.password = password;
        this.favorites = [];
    }
}
