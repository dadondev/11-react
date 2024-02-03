import React from "react";

function Cart({ props }) {
  const images = props.images[0];
  const url = images.slice(1, -1);
  console.log(url);

  return (
    <div className="border border-slate-400 inline-block py-5 px-6 max-w-[320px] rounded-lg">
      <img src={url} className="rounded-lg mb-5 max-w-[277px] mx-auto" />
      <h3 className="text-2xl font-semibold mb-3">{props.title}</h3>
      <div className="flex mb-4">
        <p className="text-slate-400 max-h-[calc(100%-30%)] overflow-y-hidden">
          {props.description}
        </p>
        <li className="list-none">Read more</li>
      </div>
      <div className="inline-block px-2 py-2 border border-slate-300 bg-gray-200 mb-3 rounded-2xl">
        <span>Clothes</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <span className="text-slate-500">{props.price}</span>
          <p className="text-2xl ">$ 1,200</p>
        </div>
        <button class="h-8 px-4 bg-purple-600 text-white rounded-xl">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
