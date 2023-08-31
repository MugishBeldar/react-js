// import logo from './logo.svg';
// import './App.css';
// import Check from "./components/check";
import Header from "./components/Header";
// import DateFormatter from "./components/DateFormatter";
import RequireTech from "./components/RequireTech";
import SubmitButton from "./components/SubmitButton";
import './App.css'

function App() {
  const data = {
    profile: '/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/react-js/001-props/src/download.png',
    welcome: 'Welcome ABC in React Js ',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Abc',
      lastName: 'Xyz',
    },
    date: new Date()
  }
  const techs = ['HTML', 'CSS', 'JAVASCRIPT']
  const buttonName = 'Greeting';
  const greet = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className="App">
      {/* <Check/> */}
      <Header data={data} />
      <RequireTech data={techs} />
      <SubmitButton buttonName={buttonName} onClick={greet}/>
    </div>
  );
}

export default App;
