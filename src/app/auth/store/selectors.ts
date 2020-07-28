import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "../types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSelector =
  createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
