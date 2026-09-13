import "./App.css";
import { Counter } from "./components/Counter.tsx";
import { MyCard } from "./components/MyCard.tsx";

import type { MenuProps } from "./types/types.ts";
import { MenuList } from "./components/MenuList.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menuItems: MenuProps[] = [
  { id: 1, name: "Espresso", price: 2500 },
  { id: 2, name: "Latte", price: 3500 },
  { id: 3, name: "Cappuccino", price: 4000 },
];

function App() {
  return (
    <>
      <div>
        <h1>React+Vite</h1>
        <MyCard name="Headphones" price={5000} />
        <MyCard name="iPhone" price={80000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <MenuList items={menuItems} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => console.log("Placed:", order.name, order.cups)}
        />
      </div>
      <div>
        <Card title="Special Offer" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
