import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import AboutCourse from './pages/AboutCourse/AboutCourse';

const App = () => {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route  path='aboutcourse' element={<AboutCourse />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
