import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "antd/dist/antd.css";
import './sass/all.css';
import { StoreProvider } from './store/index.js';
import { routes } from './utils/route';
import { renderRoutes } from 'react-router-config';
import Footer from './component/Footer.js'
import Navbar from './component/Navbar';
import Spinner from './component/Spinner';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector(state => state.load)
  return (
    <BrowserRouter>
      <Navbar />
      {loading ? <Spinner /> : null}
      {renderRoutes(routes)}
      <Footer />
    </BrowserRouter>

  );
}

export default App;


// <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/shop/:pageName" component={ProductsCategory} />
//           <Route path="/:productclassify/:productname" component={Product} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/favorite" component={Home} />
//         </Switch>