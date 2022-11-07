import React, { useEffect, useState } from "react";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/Pizza/Skeleton";
import Categories from "../components/Categories";
import pizzzas from '../assets/pizzas.json'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://62eb5b7d705264f263d70409.mockapi.io/items"
        );
        const data = await response.json();
        setLoading(false);
        setPizzas(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzzas && pizzzas.map((e) => <Pizza key={e.id} {...e} />)}
      </div>
    </>
  );
};

export default Home;
