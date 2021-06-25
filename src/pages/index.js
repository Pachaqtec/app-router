import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './Home'
import Others from './Others'
import Users from './Users'
import Login from './Login'
import NotFound from './NotFound'

const Router = () => {
  let user = true
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (!user) {
              return <Redirect to="/login" />
            }
            return <Redirect to="/home" />
          }}
        />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/others">
          <Others />
        </Route>
        <Route path="/users/:id">
          <Users />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router



/*

VERBOS SON:

- GET => Obtener información  /:id || ?nombre=Ana&edad=?&ciudad=Pirua
- POST => Para enviar información sensible { nombre: Victor: ciudad: Lima }
- PUT => Para actualizar información { nombre: Victor: ciudad: Lima }
- DELETE => Eliminar un registro /:id

  servicio/:token/:id

*/