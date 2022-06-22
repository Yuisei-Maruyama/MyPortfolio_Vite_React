import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home, Board, NoMatch } from './pages'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
