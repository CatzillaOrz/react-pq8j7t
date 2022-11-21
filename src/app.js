import React from "react";
import ReactDOM from "react-dom";
import Action from "./components/Action";
import AddOption from "./components/AddOption";
import Header from "./components/Header";
import Options from "./components/Options";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    console.log("fetching data");
  }

  componentDidUpdate() {
    console.log("saving data");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((e) => e !== option),
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleAddOption(option) {
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
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
