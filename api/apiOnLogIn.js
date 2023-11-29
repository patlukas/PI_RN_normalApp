export function apiOnLogIn(username, password) {
    if (username == "1") {
        return { token: "111111111", isPlayer: true };
    }
    if (username == "2") {
        return { token: "123456789", isPlayer: false };
    }
    return false;
}
