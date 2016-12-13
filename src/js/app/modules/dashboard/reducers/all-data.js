import CONST                from '../constants';

const initialState = {
    data: [],
    fetching: false
};

/**
 * Получение всех данных по всем категориям
 *
 * @param {Object} state - текущий state
 * @param {Object} action - action
 * @returns {Object} возвращает новый state
 */
const allChartData = (state = initialState, action) => {
    switch (action.type) {
        case CONST.GET_ALL_DATA_REQUEST:
            return state;

        case CONST.GET_ALL_DATA_SUCCESS:
            return {
                data: action.payload,
                fetching: action.fetching
            };

        default:
            return state;
    }
};

export default allChartData;
