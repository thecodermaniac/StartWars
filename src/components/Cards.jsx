import React from "react";

const Cards = ({ name, gender, mass, height }) => {
  return (
    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
      <td class="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
      <td class="whitespace-nowrap px-6 py-4">{gender}</td>
      <td class="whitespace-nowrap px-6 py-4">{mass}</td>
      <td class="whitespace-nowrap px-6 py-4">{height}</td>
    </tr>
  );
};

export default Cards;
