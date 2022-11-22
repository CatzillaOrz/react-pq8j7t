import React from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((e) => e !== option),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Can not be empty";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Already has the same value";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    console.log("fetching data");
  }

  componentDidUpdate() {
    console.log("saving data");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
