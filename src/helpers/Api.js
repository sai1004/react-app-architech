import * as axios from "axios";

export default class Api {
    api_url;
    client;

    constructor() {
        this.api_url = process.env.REACT_APP_API_ENDPOINT;
        this.client = null;
    }

    init = () => {
        let headers = {
            "Content-Type": "application/json; charset=utf-8",
        };

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        return this.client;
    };
}
