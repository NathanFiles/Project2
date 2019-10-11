export class User {
    u_id : number = 1;
    username: string;
    password: string;

    constructor(u_id: number,
                username: string,
                password : string) {

                    this.u_id = u_id;
                    this.username = username;
                    this.password = password;

        }


}