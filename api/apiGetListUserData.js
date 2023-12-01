import axios from "axios";

export async function apiGetListUserData(token) {
    let listUser = [];
    try {
        const result = await axios.get(global.apiLink + "Users", {});
        console.log(result.data);
        if (result.status == 200) {
            for (const user of result.data) {
                const { id, firstName, lastName } = user;
                listUser.push({
                    id,
                    firstName,
                    lastName,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
    return listUser;
}
