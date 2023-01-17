import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  const [url, setUrl] = useState('https://www.theverge.com/');

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            type="text"
          />
          <webview
            style={{
              flex: 1,
            }}
            src={url}
          />
        </div>

        <div>
          <div>
            <webview
              src="https://www.merriam-webster.com/dictionary/edge"
              style={{
                width: 760,
                height: '50vh',
              }}
            />

            <webview
              src="https://www.deepl.com/en/translator#en/zh/"
              style={{
                width: 760,
                height: '50vh',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
