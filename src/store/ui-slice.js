import { createSlice } from '@reduxjs/toolkit';
import { setRecipeLoadingState, setErrorMessage } from './actions/ui-actions';

const initialUIState = {
	isRecipesLoading: false,
};

const UISlice = createSlice({
	name: 'UI',
	initialState: initialUIState,
	reducers: {
		// Synchronous Actions
		setRecipeLoadingState,
		setErrorMessage,
		// -------------------
		// Asynchronous Actions
	},
});

export const UIActions = UISlice.actions;

export default UISlice;
