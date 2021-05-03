export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const alertReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => payload.id !== alert.id);
        default:
            return [...state];
  }
};