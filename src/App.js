import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import BoardPage from './pages/board.page'
import DetailPage from './pages/detail.page'
import FormPage from './pages/form.page'

import NavBar from './components/navbar.component'

import client from './graphql/client'

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <div>
                <NavBar />
                <section className="section">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={BoardPage} />
                            <Route exact path="/users/new" component={FormPage} />
                            <Route path="/users/:userId" component={DetailPage} />
                        </Switch>
                    </div>
                </section>
            </div>
        </Router>
    </ApolloProvider>
)

export default App
