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
import AppContextProdiver, { AppContext, useAppContext } from './contexts/Prodiver/AppContextProdiver';

function App() {
  // todos;
  const [allTodos, setAllTodos] = useState(null);

  //todoLoading
  const [todoLoading, setTodoLoading] = useState(true);

  const { login } = useAppContext();

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


  useEffect(() => {
    let data = localStorage.getItem("user-authentication");
    if (data) {
      data = JSON.parse(data);
      login(data);
    }
  }, [])

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
        <AppContextProdiver>
          <button onClick={scrollToTop} className="app-to-top">Top</button>
          <Header
            setAllTodos={setAllTodos}
          />
          <Router />


        </AppContextProdiver>
        <ToastContainer />
      </div>
    </Router>
  );
}

function Router() {
  const { user, authLoading } = useAppContext();
  return authLoading
    ? <PageLoader />
    : <Switch>
      <GuestRoute to="/auth/login" component={<Login />} />
      <GuestRoute to="/auth/register" component={<Register />} />
      <AuthRoute to="/dashboard" useLayout={true} component={<Register />} />

    </Switch>
}

function GuestRoute({ to, component, redirect }) {
  const { user } = useAppContext();
  return <Route to={to} >
    {!user ? component : <Redirect to={redirect || "/dashboard"} />}
  </Route>
}

function AuthRoute({ to, component, useLayout, redirect }) {
  const { user } = useAppContext();
  return <Route to={to} >
    {user
      ? useLayout
        ? <DashboardLayout>{component}</DashboardLayout>
        : component
      : <Redirect to={redirect || "/login"} />}
  </Route>
}


function DashboardLayout({ children }) {

  return <section>
    <header></header>
    <sidebar></sidebar>
    <div className="main-content">
      {children}
    </div>
  </section>
}

export default App;
