import uuid from "uuid";
import db from "../firebase/firebase";
import { push, ref, onValue, remove, update } from "firebase/database";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return push(ref(db, `users/${uid}/expenses`), expense).then((ref) => {
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

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return new Promise((resolve, reject) => {
      const updatesis = {};
      updatesis[`users/${uid}/expenses/` + `${id}`] = updates;
      update(ref(db), updatesis).then(() => {
        dispatch(editExpense(id, updates));
        resolve();
      });
    });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return remove(ref(db, `users/${uid}/expenses/` + `${id}`)).then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const expenses = [];
    const uid = getState().auth.uid;
    return new Promise((resolve, reject) => {
      onValue(
        ref(db, `users/${uid}/expenses`),
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
