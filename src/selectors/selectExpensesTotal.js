export const selectExpensesTotal = (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map((expense) => expense.amount)
      .reduce((pre, curr) => pre + curr, 0);
  }
};
