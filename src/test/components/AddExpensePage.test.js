import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import React from "react";
import { expenses } from "../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("should render AddExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
