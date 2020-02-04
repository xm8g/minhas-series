import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

function App() {
 
  const Home = () => <h1>Home</h1>
  
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genero' exact component={Generos} />
        <Route path='/genero/novo' exact component={NovoGenero} />
        <Route path='/genero/editar/:id' exact component={EditarGenero} />
      </div>
    </Router>
  );
}

export default App
