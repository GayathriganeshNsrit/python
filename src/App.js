import './App.css';
import FunctionComponent from './FunctionalComponent/functionalcomponent.jsx'
import ClassComponent from './ClassComponent/classcomponent.jsx'; 
import Counter1 from './Counterfiles/counterfiles.jsx';
function App() {
  return (
    <div>
     <h1>This is app.js file</h1>
     <FunctionComponent/>
     <ClassComponent/>
     <Counter1/>
    </div>
  );
}

export default App;
