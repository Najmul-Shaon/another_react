import "./App.css";

function App() {
  function handleClick() {
    alert("Clicked");
  }
  const handleClick2 = () => {
    alert("clicked2");
  };
  return (
    <>
      <h1>Another React</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("CLicked3");
        }}
      >
        Click3
      </button>
      <button onClick={handleClick2}>Click4</button>
    </>
  );
}

export default App;
