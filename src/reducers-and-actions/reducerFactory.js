export function createReducer(reducerMap, initialState = null) {

    return (state = initialState, action) => {
        let stateUpdates = state;

        const reducer = reducerMap[action.type];
        if (reducer) {
            stateUpdates = reducer(state, action.payload, action);
        }

        return stateUpdates === state ? state : {...state, ...stateUpdates};
    }
}
