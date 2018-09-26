export const OPEN_MORE_INFO = 'OPEN_MORE_INFO';
export const openMoreInfo = authToken => ({
    type: OPEN_MORE_INFO,
    authToken
});

export const CLOSE_MORE_INFO = 'CLOSE_MORE_INFO';
export const closeMoreInfo = authToken => ({
    type: CLOSE_MORE_INFO,
    authToken
});