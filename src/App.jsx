import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth'; // Import your Auth component

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Welcome to EdTech App
          </h1>
          <Routes>
            <Route path="/" element={<Auth />} /> {/* Render Auth page */}
            {/* You can add more routes here for different pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;