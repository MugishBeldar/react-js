import Counter from "./component.js/Counter";
import HoverCounter from "./component.js/HoverCounter";

function App() {
  return (
    <div className="App">
      <Counter name={'inside'} />
      <HoverCounter name={'inside'} />
    </div>
  );
}

export default App;
