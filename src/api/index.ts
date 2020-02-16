import ajax from "./ajax";

export function reqLogin(username: string, password: string) {
    return ajax('/v1/login', {username, password}, 'PUST');
}