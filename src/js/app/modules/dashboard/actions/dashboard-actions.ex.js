import CONSTANTS            from '../constants';

/**
 * Экшен, по получению всех данных chart'а
 *
 * @return {Object} action
 */
export const getAllChartData = () => dispatch => {
    dispatch({
        type: CONSTANTS.GET_ALL_DATA_REQUEST,
        payload: [],
        fetching: true
    });

    setTimeout(() => {
        dispatch({
            type: CONSTANTS.GET_ALL_DATA_SUCCESS,
            payload: [
                {
                    name: 'Здоровье и спорт',
                    value: 9
                },
                {
                    name: 'Друзья и окружение',
                    value: 8
                },
                {
                    name: 'Отношения',
                    value: 7
                }
            ],
            fetching: false
        });
    }, 2000);
};
