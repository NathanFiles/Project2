export class post {
    p_id: number;
    t_id: number;
    parent_id: number;
    image: string;
    text: string;
    timestamp: string;
    username: string;

    constructor(p_id: number,
                t_id: number,
                parent_id: number,
                image: string,
                text: string,
                timestamp: string,
                username: string) {

                    this.p_id = p_id;
                    this.t_id = t_id;
                    this.parent_id = parent_id;
                    this.image = image;
                    this.text = text;
                    this.timestamp = timestamp;
                    this.username = username;

        }


}
