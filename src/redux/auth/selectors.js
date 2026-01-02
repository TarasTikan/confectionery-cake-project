export const selectAuthUser = (state) => state.auth.user;
export const selectAuthSession = (state) => state.auth.session;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;