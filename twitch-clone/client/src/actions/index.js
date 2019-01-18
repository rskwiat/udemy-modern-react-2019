import streams from '../apis/streams';
import history from '../history';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const CREATE_STREAM = 'CREATE_STREAM';
export const FETCH_STREAMS = 'FETCH_STREAMS';
export const FETCH_STREAM = 'FETCH_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';
export const EDIT_STREAM = 'EDIT_STREAM';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });

  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });  
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });  
};


export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

