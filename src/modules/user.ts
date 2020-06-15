import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "../utils/storage";

export interface IUserState {
  _id?: string;
  skipIntro?: boolean;
  lastLogin?: Date;
  createAt?: Date;
}

const initialState: IUserState = {};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>): void => {
      const userId = action.payload;

      if (userId) {
        storage.setItem("USER_ID", userId);
        state._id = userId;
      }
    }
  }
});

export const { setUserId } = user.actions;

export default user;
