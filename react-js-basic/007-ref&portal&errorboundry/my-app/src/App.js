import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Portal from './components/Portal';
import ErrorInComponent from './components/Error';
import Errorboundary from './components/Errorboundary';
function App() {
  return (
    <div className="App">
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <Portal /> */}
      {/* <Errorboundary>
        <ErrorInComponent name={'batman'} />
        <ErrorInComponent name={'superman'} />
        <ErrorInComponent name={'joker'} />
      </Errorboundary> */}
      <Errorboundary>
        <ErrorInComponent name={'batman'} />
      </Errorboundary>

      <Errorboundary>
        <ErrorInComponent name={'superman'} />
      </Errorboundary>

      <Errorboundary>
        <ErrorInComponent name={'joker'} />
      </Errorboundary>
    </div>
  );
}

export default App;
