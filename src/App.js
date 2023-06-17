import logo from './logo.svg';
import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/todo" element={<ToDoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
