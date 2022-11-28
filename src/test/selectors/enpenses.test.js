import moment from "moment";
import selectExpenses from "../../selectors/expenses";
import { expenses } from "../fixtures/expenses";

test("should filter by text value", () => {
  const filter = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter by endDate", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: 0,
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter sort by date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter sort by date", () => {
  const filter = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
