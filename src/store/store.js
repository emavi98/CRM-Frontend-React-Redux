import { configureStore } from '@reduxjs/toolkit';
import { storeSlice } from './storeSlice';

export const store = configureStore({
	reducer: {
		// auth:       authSlice.reducer,
		// calendar:   calendarSlice.reducer,
		storeData: storeSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
