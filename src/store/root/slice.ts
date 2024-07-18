import { createSlice } from '@reduxjs/toolkit';
import { rootStateType } from '@store/root/types.ts';

const initialState: rootStateType = {};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});

export const { reducer: rootReducer, actions: rootActions } = rootSlice;
