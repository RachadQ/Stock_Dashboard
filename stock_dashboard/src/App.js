import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [onToggleState, setOnToggleState] = useState(false);

  function onToggle(idx) {
  
    console.log("toggled", idx);
    setOnToggleState(!onToggleState);
  }
  return (
    <div className="App">
      <Dashboard onToggle={onToggle}/>
      {/* Popup Model */}
       {onToggleState && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold mb-4">Popup Opened!</h2>
            <p className="mb-4">This popup appeared when you toggled on.</p>
            <button
              onClick={() => setOnToggleState(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
