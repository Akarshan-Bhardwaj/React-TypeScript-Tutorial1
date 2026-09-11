import type { MenuProps } from "../types/types";
import { MyCard } from "./MyCard";

interface MenuListProps {
  items: MenuProps[];
}

export function MenuList({ items }: MenuListProps) {
  return (
    <div>
      {items.map((item) => (
        <MyCard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 3000}
        />
      ))}
    </div>
  );
}
