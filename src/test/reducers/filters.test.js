import moment from "moment";
import filtersReducer from "../../reducers/filters";

// '@@INIT' use it in test cases to make sure that the producer sets itself up correctly
test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "hello world";
  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("hello world");
});

test("should set startDate filter", () => {
  const action = { type: "SET_START_DATE", startDate: 0 };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});

test("should set startDate filter", () => {
  const action = { type: "SET_END_DATE", endDate: 0 };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(0);
});
