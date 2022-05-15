const container = document.getElementById("root");

function App() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prevCount => prevCount - 1)
  }, "Decrement"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prevCount => prevCount + 1)
  }, "increment"));
}

const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));