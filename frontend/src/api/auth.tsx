import instance from "./instance";

export const createOrUpdateUser = async (authtoken: string) => {
    const url = "/create-or-update-user";
    return instance.post(
        url,
        {},
        {
            headers: {
                authtoken: authtoken,
            },
        },
    );
};
export const currentUser = async (authtoken: string) => {
    const url = "/current-user";
    return instance.post(
        url,
        {},
        {
            headers: {
                authtoken: authtoken,
            },
        },
    );
};
export const currentAdmin = async (authtoken: string) => {
    const url = "/current-admin";
    return instance.post(
        url,
        {},
        {
            headers: {
                authtoken: authtoken,
            },
        },
    );
};
