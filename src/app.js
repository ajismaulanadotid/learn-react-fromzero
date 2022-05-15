const container = document.getElementById("root");

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
