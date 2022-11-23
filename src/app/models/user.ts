export class User {
    name!: string;
    username!: string; 
    email!:string; 
    password!:string; 
    id!: number;

    constructor(id: number, name: string, username: string, email: string, password: string){
        this.name = name; 
        this.username = username; 
        this.email = email; 
        this.password = password;
        this.id = id
    }
}
