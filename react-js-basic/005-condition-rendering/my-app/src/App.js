// import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import ConditionRendering from './components/ConditionRendering'
import ListRendring from './components/ListRendring';
import StyleSheet from './components/StyleSheet';
import Fregments from './components/Fregments';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      {/* <Parent />
      <ConditionRendering /> */}
      <ListRendring />
      <StyleSheet />
      {/* react fragmentns start */}
      <Fregments />
      <Table />
    </div>
  );
}

export default App;
