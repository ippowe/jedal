import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './index';
import { findIndex } from 'lodash';
export interface Toast {
    id: string;
    message: string;
}
export interface IToastState {
    toasts: Toast[];
}

const initialState: IToastState = {
    toasts: [],
};

const toast = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        createToast: (state, action: PayloadAction<{ id: string; message: string }>): void => {
            state.toasts.push({
                id: action.payload.id,
                message: action.payload.message,
            });
        },
        removeToast: (state, action: PayloadAction<{ id: string; message: string }>): void => {
            const { id } = action.payload;
            const { toasts } = state;
            const index = findIndex(state.toasts, (toast) => toast.id === id);
            if (index > -1) {
                toasts.splice(index, 1);
            }
        },
    },
});

export const { createToast, removeToast } = toast.actions;

export const displayToast = (id: string, message: string): AppThunk => async (dispatch) => {
    dispatch(createToast({ id, message }));
    setTimeout(() => {
        dispatch(removeToast({ id, message }));
    }, 2500);
};
export default toast;
