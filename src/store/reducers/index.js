const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH':
            return { feched: true };
        case 'FETCH_ERROR':
            return { error: true, feched: false };
        default:
            return { test: 1 };
    }
};

export default {
    test: [reducer, { feched: false }]
};