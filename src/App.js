import React, { useState, useEffect } from 'react'
import './App.css';
import config from './config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useHeaderSetter from './hooks/useHeaderSetter';

// import HeaderContext from './contexts/HeaderContext';
import Header from './components/layouts/Header';
import Todos from './pages/Todos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthRoute from './router/components/AuthRoute';
import GuestRoutes from './router/GuestRoutes';


function App() {
  // todos;
  const [allTodos, setAllTodos] = useState(null);

  //todoLoading
  const [todoLoading, setTodoLoading] = useState(true);

  //loads
  useEffect(() => {
    fetch(`${config.baseUrl}todo`)
      .then(res => res.json())
      .then(res => {
        setAllTodos(res);
        setTodoLoading(false);
      })
      .catch(err => {
        setTodoLoading(false);
      })
      ;
  },
    // since this dependency is empty it will never be rerun 
    []
  )
  // const Headers = useHeaderSetter();

  // const data = {
  //   // currView,
  //   allTodos,
  //   setAllTodos,
  //   // setView,
  // }

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <Router>
      <div className="App">

        <button onClick={scrollToTop} className="app-to-top">Top</button>
        <Header
          setAllTodos={setAllTodos}
        />

        <Switch>
          <GuestRoutes path="/auth" />
          <AuthRoute exact path="/todos">
            <Todos
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              loading={todoLoading}
            />
          </AuthRoute>

          <Route exact path="/">
            <Redirect to="/auth/login" />
          </Route>

          <Route path="*">
            <div>Page Not Found</div>
          </Route>
        </Switch>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
