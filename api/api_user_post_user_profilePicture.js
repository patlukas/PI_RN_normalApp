var FormData = require("form-data");

export async function api_user_post_user_profilePicture(
    token,
    userId,
    picture
) {
    var data = new FormData();
    data.append("imageFile", {
        uri: picture, // ścieżka do obrazu
        name: "nazwa.jpg", // nazwa pliku
        type: "image/jpg", // typ pliku
    });
    await fetch(global.apiLink + "Users/" + userId + "/ProfilePicture", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: data,
    });
}
