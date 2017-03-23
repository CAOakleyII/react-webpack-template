import { Route, IndexRoute } from 'react-router';
import App from './app/App.jsx';
import Index from './index/Index.jsx';
export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Route>
)
