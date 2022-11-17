"use strict";

// import App from './App';

var rootElement = document.getElementById("root");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDescision = function onMakeDescision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "h2",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "remove all"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDescision },
      "Make a desicion"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (e) {
        return React.createElement(
          "li",
          { key: e },
          e
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { name: "option", type: "text" }),
      React.createElement(
        "button",
        null,
        "submit"
      )
    )
  );
  ReactDOM.render(template, rootElement);
};

render();
