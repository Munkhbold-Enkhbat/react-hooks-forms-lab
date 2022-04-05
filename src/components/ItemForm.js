import React from "react";
import { useState } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";

// const newItem = {
//   id: uuid(),
//   name: itemName,
//   category: itemCategory
// }

function ItemForm(props) {

  // const [newItemName, setNewItemName] = useState("")
  // const [newItemCategory, setNewItemCategory] = useState("")  


  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
