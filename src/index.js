// import App from './App';

const rootElement = document.getElementById("root");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDescision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <h2>{app.options.length}</h2>
      <button onClick={onRemoveAll}>remove all</button>
      <button disabled={app.options.length === 0} onClick={onMakeDescision}>
        Make a desicion
      </button>
      <ol>
        {app.options.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input name="option" type="text" />
        <button>submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, rootElement);
};

render();
