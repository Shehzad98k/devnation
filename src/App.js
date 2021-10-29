import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Patients from './pages/Patients/Patients';
import Scheduler from './pages/Scheduler/Scheduler';

const App = () => {

    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/scheduler" exact component={Scheduler} />
                    <Route path="/patients" exact component={Patients} />
                    <Redirect to="/" />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
} 

export default App;
