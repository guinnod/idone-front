export const getJwt = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        return `Bearer ${jwt}`;
    }
    return false;
}

export const setJwt = (jwt) => {
    localStorage.setItem("jwt", jwt);
}