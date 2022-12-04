import { selectExpensesTotal } from "../../selectors/selectExpensesTotal";
import { expenses } from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("should correctly add up a single exepnse", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("should correctly add up all exepnse", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
