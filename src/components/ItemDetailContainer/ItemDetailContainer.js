import React from "react";
import { useParams } from "react-router-dom";
import useItem from "../../hooks/useItem";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { item } = useItem(id);
  //   console.log(item);
  return (
    <section className="flex flex-row gap-20 items-center justify-center p-48">
      <article>
        <h1 className="text-5xl text-black font-bold">{item.title}</h1>
        <h2 className="text-2xl font-medium">Price: ${item.price}</h2>
        <h2 className="text-xl ">{item.description}</h2>
        <button className="p-4 bg-slate-300 rounded-md text-white">
          <h2 className="text-xl font-bold">Add to cart</h2>
        </button>
      </article>
      <article>
        <img className="w-96 h-96" src={item.pictureUrl} alt={item.title} />
      </article>
    </section>
  );
}
