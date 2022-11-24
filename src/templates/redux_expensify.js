import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByDate = (text) => ({
  type: "SORT_BY_DATE",
});

const sortByAmount = (text) => ({
  type: "SORT_BY_AMOUNT",
});

const setStartDate = (date) => ({
  type: "SET_START_DATE",
  startDate: date,
});

const setEndDate = (date) => ({
  type: "SET_END_DATE",
  endDate: date,
});

const expenesesReducerDefautlState = [];

const expensesReducer = (state = expenesesReducerDefautlState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefautState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefautState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};

// get visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt > startDate;
    const endDateDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateDateMatch && textMatch;
  });
};
// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer,
  })
);

const dispatch = () => {
  const expenseOne = store.dispatch(
    addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
  );
  const expenseTwo = store.dispatch(
    addExpense({ description: "Cofee", amount: 300, createdAt: -200 })
  );

  /**
   *  
  store.dispatch(removeExpense({ id: expenseOne.expense.id }));
  store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000 }));
  store.dispatch(sortByDate());
  store.dispatch(sortByAmount());

  store.dispatch(setStartDate(-400));
  store.dispatch(setEndDate(10000));
   */

  store.dispatch(setTextFilter("cofee"));
};

const run = () => {
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses);
  });
  dispatch();
};

export default run;

const demoState = {
  expenses: [
    {
      id: "poijaad",
      description: "January Rent",
      note: "This was the final payment for that address.",
      amount: 45234,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
