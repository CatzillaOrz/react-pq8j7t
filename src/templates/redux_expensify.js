const dispatch = () => {
  const expenseOne = store.dispatch(
    addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
  );
  const expenseTwo = store.dispatch(
    addExpense({ description: "Coffee", amount: 300, createdAt: -200 })
  );

  /**
   *  
  store.dispatch(removeExpense({ id: expenseOne.expense.id }));
  store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000 }));

  store.dispatch(setStartDate(-400));
  store.dispatch(setEndDate(10000));
  store.dispatch(setTextFilter("coffee"));

  store.dispatch(sortByDate());
  store.dispatch(sortByAmount());
   */
};

const run = () => {
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
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
