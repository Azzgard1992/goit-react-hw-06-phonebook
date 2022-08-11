import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    createContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { createContact, deleteContact, filterContacts } =
  contactsSlice.actions;
