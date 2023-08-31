import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* right way  */}
      <Counter >
        {(count, clickHandler) => (
          <ClickCounter count={count} clickHandler={clickHandler} />
        )}
      </Counter>

      <Counter >
        {(count, clickHandler) => (
          <HoverCounter count={count} clickHandler={clickHandler} />
        )}
      </Counter>

      {/* wrong way but working */}
      {/* <Counter render={(count, clickHandler) => (
        <HoverCounter count={count} clickHandler={clickHandler} />
      )} /> */}
    </div>
  );
}

export default App;
