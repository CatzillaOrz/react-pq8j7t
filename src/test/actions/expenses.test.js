import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";

test("should setup remove expense aciton object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense aciton object", () => {
  const _uid = uuid();
  const action = editExpense("123abc", {
    note: "New note",
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note",
    },
  });
});

test("should setup add expense aciton object with provided value", () => {
  const expenseDate = {
    description: "Rent",
    amount: 1009500,
    createdAt: 1000,
    note: "This was last month rent",
  };

  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseDate,
      id: expect.any(String), // expect.any(String)
    },
  });
});

test("should setup add expense aciton object with default value", () => {
  // call without data
  const expenseData = {};
  // Assert the value of the return
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
