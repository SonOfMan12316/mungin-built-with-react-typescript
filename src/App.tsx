import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/home/Index';
import Mission from './pages/others/mission';
import News from './pages/others/news';
import WaitingList from './pages/others/waiting-list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/our-mission' element={<Mission />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/join-our-waiting-list' element={<WaitingList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
