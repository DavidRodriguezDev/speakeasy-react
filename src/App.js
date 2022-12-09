import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Gin from './pages/Gin/Gin';
import Login from './pages/Login/Login';
import Recipes from './pages/Recipes/Recipes';
import Register from './pages/Register/Register';
import Rum from './pages/Rum/Rum';
import Tequila from './pages/Tequila/Tequila';
import Vodka from './pages/Vodka/Vodka';
import Whisky from './pages/Whisky/Whisky';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/gin" element={<Gin></Gin>}></Route>
          <Route path="/rum" element={<Rum/>}></Route>
          <Route path="/tequila" element={<Tequila/>}></Route>
          <Route path="/whisky" element={<Whisky/>}></Route>
          <Route path="/vodka" element={<Vodka/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/recipess" element={<Recipes/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
