import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailCocktail from './pages/DetailCocktail/DetailCocktail';
import Gin from './pages/Gin/Gin';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Recipes from './pages/Recipes/Recipes';
import Register from './pages/Register/Register';
import Rum from './pages/Rum/Rum';
import Tequila from './pages/Tequila/Tequila';
import Vodka from './pages/Vodka/Vodka';
import Whisky from './pages/Whisky/Whisky';
import store from './redux/store';
import { UserContext } from './shared/contexts/UserContext';

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Provider store={store}>
      <UserContext.Provider value={{token, setToken}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/gin" element={token ? <Gin></Gin> : <Login></Login>}></Route>
            <Route path="/rum" element={token ? <Rum/> : <Login></Login>}></Route>
            <Route path="/tequila" element={token ? <Tequila/> : <Login></Login>}></Route>
            <Route path="/whisky" element={token ? <Whisky/> : <Login></Login>}></Route>
            <Route path="/vodka" element={token ? <Vodka/> : <Login></Login>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/recipes" element={token ? <Recipes/> : <Login></Login>}></Route>
            <Route path="/:idCocktail" element={token ? <DetailCocktail/> : <Login></Login>}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
