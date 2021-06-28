import { createSlice } from '@reduxjs/toolkit';
import {
	setRecipeLoadingState,
	setErrorMessage,
	updateBeginningState,
} from './actions/ui-actions';

const initialUIState = {
	isBeginning: true,
	isRecipesLoading: false,
};

const UISlice = createSlice({
	name: 'UI',
	initialState: initialUIState,
	reducers: {
		// Synchronous Actions
		setRecipeLoadingState,
		setErrorMessage,
		updateBeginningState,
		// -------------------
		// Asynchronous Actions
	},
});

export const UIActions = UISlice.actions;

export default UISlice;
