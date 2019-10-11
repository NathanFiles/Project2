export class user {
    u_id : number;
    username: string;
    password: string;
    type: number;

    constructor(u_id: number,
                username: string,
                password : string,
                type: number) {

                    this.u_id = u_id;
                    this.username = username;
                    this.password = password;
                    this.type = type;

        }


}