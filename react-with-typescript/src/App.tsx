/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider } from 'react-query';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';
import Heading from './component/Heading';
import Oscar from './component/Oscar';
import Button from './component/Button';
import Input from './component/Input';
import LoginLogout from './component/state/LoginLogout';
import User from './component/state/User';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './component2/Counter';
import Greet from './component2/Greet';
import Login from './component2/Login';
import UsersData from './component2/UsersData';
import {Routes, Route} from 'react-router-dom'

const queryClient = new QueryClient();

const person = {
  first: 'tony',
  last: "stark",
}
const personList = [
  {
    first: 'bruce',
    last: "wayn",
  },
  {
    first: 'barry',
    last: "allen",
  },
  {
    first: 'peter',
    last: 'parker'
  }
]
const status = 'Loading'
function App() {
  return (
    <>
      {/* <Person name={person} />
      <PersonList nameList={personList} />
      <Status status={status}/>
      <Heading>this is a heading</Heading>
      <Oscar>
        <Heading>Oscar goes to the avengers infinity war.</Heading>
      </Oscar> */}
      {/* <Button handleclick={(event, count)=> console.log('clicked on button', count, 'times.')}>Click</Button>
      <Input value="" handleChange={(event)=>console.log('handleChange')}/> */}
      {/* <LoginLogout/> */}
      {/* <User/> */}
      {/* <Counter name='ABC'/>
      <Greet /> */}
      {/* <Login /> */}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<PersonList nameList={personList} />}/>
          <Route path='/userdata' element={<UsersData/>}/>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
