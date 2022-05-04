import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import { FormsPage } from './pages/FormPage'

import { DetailsPage } from './pages/DetailsPage'

import { DataProvider } from './Providers/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={FormsPage} />
        <Route path="/details" exact component={DetailsPage} />
      </Switch>
    </Router>
  </DataProvider>
)
