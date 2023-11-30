import axios from "axios";

export async function apiOnLogIn(email, password) {
    try {
        const result = await axios.get(global.apiLink + "Users", {});
        if (result.status == 200) {
            for (const user of result.data) {
                console.log(user.email, email);
                if (user.email == email && password != "qwerty") {
                    let isPlayer = false;
                    if (user.playerId !== null) isPlayer = true;
                    return { id: user.id, token: "123456789", isPlayer };
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
