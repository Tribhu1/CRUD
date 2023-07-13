import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddOrEdit from './pages/AddOrEdit';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/addContact" Component={AddOrEdit} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
