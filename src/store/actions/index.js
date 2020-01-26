export const simpleAction = () => dispatch => {
    dispatch({
        type: 'Trial_action',
        payload: 'result'
    });
}