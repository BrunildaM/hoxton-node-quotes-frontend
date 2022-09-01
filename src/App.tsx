import { useEffect, useState } from "react";
import "./App.css";

type Quote = {
  id: number;
  quote: string;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};


function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then(quotesFromServer => setQuotes(quotesFromServer));
  });

  return (
    <div className="App">
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <div className="quote">
            <li className="list-items">{quote.quote}</li>
            <li className="list-items">{quote.firstName}</li>
            <li className="list-items">{quote.lastName}</li>
            <li className="list-items">{quote.age} </li>
            <img src={quote.image} alt={quote.firstName} width={50} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
