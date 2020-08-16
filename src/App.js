import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Posts from "./containers/Posts/Posts";
import AddPost from "./containers/AddPost/AddPost";
import Auth from "./containers/Auth/Auth";

let routes = (
    <Switch>
      <Route path={"/posts"} component={Posts}/>
      <Route path={"/add-post"} component={AddPost}/>
      <Route path={"/auth"} component={Auth}/>
      <Redirect to={'/auth'} from={'/'}/>
    </Switch>
)

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
