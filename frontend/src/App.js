import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Menggunakan Fetch
    // fetch('http://localhost:5000/api/data')
    //   .then(response => response.json())
    //   .then(data => setData(data));

    // Menggunakan Axios
    axios.get('https://test-express-react.vercel.app/')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React & Express</h1>
      <p>Data dari frontend</p>
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
