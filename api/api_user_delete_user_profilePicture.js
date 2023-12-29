import axios from "axios";

export async function api_user_delete_user_profilePicture(token, userId) {
    try {
        const result = await axios.delete(
            global.apiLink + "Users/" + userId + "/ProfilePicture",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        if (result.status == 200) return "";
        return "Error during del image.";
    } catch (error) {
        console.log(error);
        return "Unexpected error during del image.";
    }
}
