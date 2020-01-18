import ajax from "./ajax";

export function reqLogin(username: string, password: string) {
    return ajax('/admin', {username, password}, 'PUST');
}