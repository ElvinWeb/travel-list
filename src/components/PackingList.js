import { useState } from "react";
import Item from "./Item";

function PackingList({ itemsObj, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = itemsObj;
  if (sortBy === "description")
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = itemsObj
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sorted by input order</option>
          <option value="description">sorted by description</option>
          <option value="packed">sorted by packed status</option>
        </select>
        <button onClick={onClearList}>Clear all</button>
      </div>
    </div>
  );
}

export default PackingList;
