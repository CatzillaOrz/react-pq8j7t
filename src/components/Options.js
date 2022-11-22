import React from "react";
import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={(e) => {
            e.preventDefault();
            props.handleDeleteOptions();
          }}
        >
          Remov all
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an Option to get started!</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
