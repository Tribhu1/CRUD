import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddOrEdit from './pages/addOrEdit';
import View from './pages/View';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/addContact" Component={AddOrEdit} />
        <Route path="/update/:id" Component={AddOrEdit} />
        <Route path="/view/:id" Component={View} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
