import { combineReducers, configureStore } from "@reduxjs/toolkit";

import jobsReducer from "../reducer/jobsReducer";
import companyReducer from "../reducer/companyReducer";
import favouriteReducer from "../reducer/favouritesReducer";

const rootReducers = combineReducers({
  jobs: jobsReducer,
  company: companyReducer,
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
