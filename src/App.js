import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useParams,
} from "react-router-dom";
import routes from './config/routes';
import Home from './components/Home/Home';
import ContactMe from './components/ContactMe/ContactMe';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout><Home /></Layout>} />
      <Route path={routes.contactMe} element={<Layout><ContactMe /></Layout>} />
    </Routes>
  );
}

export default App;
