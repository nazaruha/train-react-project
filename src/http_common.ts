import axios from "axios";
import { APP_ENV } from "./env";

const allin = axios.create({
    // all props' names are not made up. They are fatory-made by axios
    baseURL: APP_ENV.ALLIN_URL, // our url 'https://f21.allin.ml/' will be used by default. This means that we haven't to use it in
    // get()/pust()/put() etc. methods
    headers: { // in this object we write some rules
        "Content-Type": "application/json" // this converts javascript(JS) into JSON
    }
});

export default allin;