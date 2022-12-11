import uuid from "uuid";
import db from "../firebase/firebase";
import { push, ref, onValue } from "firebase/database";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return push(ref(db, "expenses"), expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    const expenses = [];
    return new Promise((resolve, reject) => {
      onValue(
        ref(db, "expenses"),
        (snapshot) => {
          const data = snapshot.val();
          for (let key in data) {
            expenses.push({
              id: key,
              ...data[key],
            });
          }
          resolve();
        },
        {
          onlyOnce: true,
        }
      );
    }).then(() => {
      console.log(expenses);
      dispatch(setExpenses(expenses));
    });
  };
};
