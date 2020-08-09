import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "../types/authState.interface";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "./actions/register.action";
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction
} from "./actions/login.action";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "./actions/getCurrentUser.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(loginAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(loginSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(getCurrentUserAction, (state): AuthStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(getCurrentUserFailureAction, (state): AuthStateInterface => ({
    ...state,
    isLoggedIn: false,
    currentUser: null,
    isLoading: false
  }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
