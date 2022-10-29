import Header from "./Header";
import Categories from "./Categories";
import "./assets/style/app.css";
import Sort from "./Sort";
import Pizza from "./Pizza";
function App() {
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
              <Pizza title='Чизбургер-пицца' price='45'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
