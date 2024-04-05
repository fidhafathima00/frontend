import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import {store, persistor} from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ForgotPage from './pages/forgot';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} />  
        <Route path="/*" element={<RegisterPage />} />  
        
        <Route path="/forgot" element={<ForgotPage/>} />
      </Routes> 
    </Router> 
    </PersistGate>

    </Provider> 
  );
}

export default App;
