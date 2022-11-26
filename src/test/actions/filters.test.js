import {
  setStartDate,
  setTextFilter,
  setEndDate,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(new Date());
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: expect.any(Date),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(new Date());
  expect(action).toEqual({ type: "SET_END_DATE", endDate: expect.any(Date) });
});

test("should generate set text filter action object", () => {
  const text = "foo";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should generate sort date filter action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate sort amount filter action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
