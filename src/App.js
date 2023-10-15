import './App.css';
import { useEffect, useState } from 'react';

const baseURL = "https://gateway-arbitrum.network.thegraph.com/api";
const queryURL = "subgraphs/id/DJ4SBqiG8A8ytcsNJSuUU2gDTLFXxxPrAN8Aags84JH2"
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getGMXData();
  })

  async function getGMXData() {
    try {
      const response = await fetch(`${baseURL}/TU_API_KEY/${queryURL}`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          closePositions(first: 5) {
            id
            account
            link {
              id
            }
            key
          }
        }`
      })
    });

    console.log("Response ", await response.json());

    } catch (error) {
      console.log("[ERROR: !!] ", error)
    }
  }
  return (
    <div className="App">
      <h1>API Subgraph Example</h1>
    </div>
  );
}

export default App;
