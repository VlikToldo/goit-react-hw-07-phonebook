import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice'; 

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
})

  

export default rootReducer;