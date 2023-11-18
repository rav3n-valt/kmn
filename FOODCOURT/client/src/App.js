import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar';
import Homescreen from './screens/homescreen';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Homescreen></Homescreen>
    </div>
  );
}

export default App;
