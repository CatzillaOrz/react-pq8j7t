import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("should correctly render loginPgae", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});