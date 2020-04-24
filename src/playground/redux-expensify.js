import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_EXPENSE
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filter Reducers

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "randomchars",
      description: "January Rent",
      note: "this was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
