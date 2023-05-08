import allin from "../../http_common"

const setAuthToken = (token: string) => {
    if (token) {
        allin.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.token = token;
    }
    else {
        delete allin.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
    }
}

export default setAuthToken;