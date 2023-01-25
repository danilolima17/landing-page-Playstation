import "./index.css";
import { useState, useEffect } from "react";
import Header from './components/Header'
import Product from './components/Product';

export default function App() {
  const [data, setData] = useState(null);
  const controllerData = {
    system: "PS5",
    item: "Dualshock 5",
    description: "Controle para Playstation 5",
    price: "R$399.00",
    img: "./imgs/controller.webp"
  };

  useEffect(() => {
    setData(controllerData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Product data={data} />
    </div>
  );
}
