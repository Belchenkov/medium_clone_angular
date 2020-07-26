import { createAction, props } from '@ngrx/store';

import { ActionTypes } from "../actionTypes";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
