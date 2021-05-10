import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Snack from "./Snack";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/chips">
          <Snack
            name="Potato Chips"
            url="https://media.giphy.com/media/7T2DHgFo2nqCToG6DU/giphy.gif"
          />
        </Route>
        <Route exact path="/soda">
          <Snack
            name="soda"
            url="https://media.giphy.com/media/GnenMkWU4oaIM/giphy.gif"
          />
        </Route>
        <Route exact path="/sandwitch">
          <Snack
            name="sandwitch"
            url="https://media.giphy.com/media/TQt1xVuNhc9hK/giphy.gif"
          />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
