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
import AboutMe from './components/AboutMe/AboutMe';
import MyServices from './components/MyServices/MyServices';
import MyProjects from './components/MyProjects/MyProjects';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout><Home /></Layout>} />
      <Route path={routes.contactMe} element={<Layout><ContactMe /></Layout>} />
      <Route path={routes.aboutMe} element={<Layout><AboutMe /></Layout>} />
      <Route path={routes.myServices} element={<Layout><MyServices /></Layout>} />
      <Route path={routes.myProjects} element={<Layout><MyProjects /></Layout>} />
    </Routes>
  );
}

export default App;
