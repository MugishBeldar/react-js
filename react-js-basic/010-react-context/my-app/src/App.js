import ComponentC from "./component/ComponentC";
import { UserProvider } from "./component/UserContext";
function App() {
  return (
    <div className="App">
      <UserProvider value='ABC'>
        <ComponentC/>
      </UserProvider>

      {/* when userprovide is comment then default value is consumed "Rapidops" */}
    </div>
  );
}

export default App;
