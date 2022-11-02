import Header from "./Header";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import "./assets/style/app.css";
import Sort from "./Sort";
import Pizza from "./Pizza";
// import pizzas from "../src/assets/pizzas.json";
function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://62eb5b7d705264f263d70409.mockapi.io/items"
        );
        const data = await response.json();
        setPizzas(data)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas && pizzas.map((e) => <Pizza key={e.id} {...e} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
