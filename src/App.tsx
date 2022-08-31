import { useEffect, useState } from "react";
import "./App.css";

type Quote = {
  id: number
  quote: string
  author: string
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  });

  return (
    <div className="App">
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <div>
            <li>{quote.quote}</li>
            <li>{quote.author}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
