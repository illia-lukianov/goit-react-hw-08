import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthorizationHeader = (value) =>
  (axios.defaults.headers.common.Authorization = value);

export const signUp = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup', userData);
      setAuthorizationHeader(`Bearer ${responce.data.token}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', userData);
      setAuthorizationHeader(`Bearer ${responce.data.token}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    setAuthorizationHeader('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthorizationHeader(`Bearer ${reduxState.auth.token}`);
    const responce = await axios.get('/users/current');
    return responce.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  },
);
