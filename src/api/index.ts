import ajax from "./ajax";

export function reqLogin(username: string, password: string) {
    return ajax('/login', {username, password}, 'PUST');
}