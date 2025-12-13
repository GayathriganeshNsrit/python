/*Route is a self closing tag where we give the paths using this tag. 
    Core Component that defines a specific path and the react element to render when that path matches 
    / is an empty path. element contains the component that we need to pass. Here I want to add the Counter component
    so i have given the Counter which is given as reference.
    Whenever we open the page, the default page is opened.  
    */
import './App.css';
import CounterFiles from './Counterfiles/counterfiles.jsx';
import {Route, Routes} from 'react-router-dom';
import FunctionComponent from './FunctionalComponent/functionalcomponent.jsx';
import ClassComponent from './ClassComponent/classcomponent.jsx';
function App() {
  return (
   <>
  <Routes> {/* Routes is a container component which holds all the individual route definitions */}
    <Route path='/' element={<CounterFiles/>}/> 
    <Route path='/classcomponent' element={<ClassComponent/>}/>
    <Route path='/functioncomponent' element={<FunctionComponent/>}/>
    </Routes>
   </> // An anomoyous tag or home tag
  );
}

export default App;
