import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

const ProductsList = () => {
  const [showModal, setShowModal] = useState(false);

  const { products } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h1 className="text-center my-5 text-4xl font-bold text-gray-700">
            List of Products
          </h1>
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-8 py-3 font-semibold rounded bg-gray-600 text-white my-2 "
              >
                Add new product
              </button>
              <ProductTable products={products} />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <ProductForm
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ProductsList;
