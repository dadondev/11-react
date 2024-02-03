import { useEffect } from "react";
import Cart from "../components/Cart";
import { useState } from "react";
import getApi from "../constant/GetRes";

function Main() {
  const [product, setProduct] = useState();
  const getProduct = async (id) => {
    const res = await getApi(id);
    setProduct(res);
  };

  useEffect(() => {
    getProduct("");
  }, []);
  return (
    <div className="container mx-auto px-4 mt-8">
      <input
        type="text"
        placeholder="search"
        className="input mb-4 focus:outline-none bg-slate-50 outline-none border border-slate-300 focus:border-purple-600 rounded-lg py-2 px-3 placeholder:text-gray-600 placeholder:capitalize"
      />
      <div className="md:grid md:grid-cols-[5fr_1fr] container mx-auto md:justify-between gap-4 flex flex-col-reverse">
        <div className="flex md:items-center flex-wrap gap-5 justify-center">
          {product && product.map((e) => <Cart props={e} />)}
        </div>
        <div class="lg:!visible lg:!opacity-1 lg:!h-max md:visible md:h-auto visible h-auto md:opacity-1 opacity-1 mb-10 lg:ml-7 h-max  w-full  lg:w-2/12 min-w-48 text-xl font-medium dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 rounded-xl  pb-0 py-5 transition-all ">
          <p class="ml-2 flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2 text-purpleshade-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"></path>
            </svg>
            Categories :
          </p>
          <ul class="font-extralight text-lg ">
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent  my-3 border-l-2 border-purpleshade-400"
              id="0"
            >
              All
            </li>
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent my-3 false"
              id="1"
            >
              Clothes
            </li>
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent my-3 false"
              id="2"
            >
              Electronics
            </li>
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent my-3 false"
              id="3"
            >
              Furniture
            </li>
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent my-3 false"
              id="4"
            >
              Shoes
            </li>
            <li
              class="py-1 cursor-pointer px-2 bg-gradient-to-r from-zinc-200 dark:from-grayshade-400 dark:to-transparent my-3 false"
              id="5"
            >
              Miscellaneous
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
