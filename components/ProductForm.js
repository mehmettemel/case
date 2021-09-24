import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const ProductForm = ({ setShowModal, showModal }) => {
  const { categories, setProducts, products } = useContext(DataContext);
  const [checkedCategories, setCheckedCategories] = useState([]);
  // console.log("checked", checkedCategories);
  // console.log("related", relatedCategories);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    relatedCategories: [],
    productDesc: "",
    productPhoto: "",
    productGender: "",
    productPrice: "",
  });
  useEffect(() => {
    setNewProduct({
      ...newProduct,
      relatedCategories: checkedCategories,
    });
  }, [checkedCategories]);
  const {
    productName,
    productDesc,
    productPhoto,
    relatedCategories,
    productGender,
    productPrice,
  } = newProduct;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeImage = (e) => {
    const target = e.target;
    const files = target.files;
    if (files) {
      const file = files[0];
      setNewProduct({ ...newProduct, productPhoto: file });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newProduct.productName ||
      !newProduct.productDesc ||
      !newProduct.productPrice ||
      newProduct.relatedCategories.length === 0
    ) {
      alert("You need to fill all blank fields");
    } else {
      setProducts([newProduct, ...products]);
      setShowModal(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-center text-xl font-bold">New Product Form</h2>
          <div className="rounded bg-white max-w-md  overflow-hidden shadow-xl p-5">
            <form className="space-y-4" action="#">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      htmlFor="categoryName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Name
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="productName"
                      id="productName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="categoryDesc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category Description
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="productDesc"
                      id="productDesc"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <div className="mt-4">
                      <span className="text-gray-700">Gender</span>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            onChange={handleInputChange}
                            type="radio"
                            className="form-radio"
                            name="productGender"
                            value="Boy"
                          />
                          <span className="ml-2">Boy</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            onChange={handleInputChange}
                            type="radio"
                            className="form-radio"
                            name="productGender"
                            value="Girl"
                          />
                          <span className="ml-2">Girl</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="categoryDesc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Price
                    </label>
                    <div className="flex space-x-4">
                      {" "}
                      <input
                        onChange={handleInputChange}
                        type="number"
                        name="productPrice"
                        id="productPrice"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <span>$</span>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="block">
                      <span className="text-gray-700">Categories</span>
                      <div className="mt-2">
                        {categories.map((category) => (
                          <div key={category.categoryName}>
                            <label className="inline-flex items-center">
                              <input
                                onChange={(e) => {
                                  // console.log(checkedCategories);
                                  if (e.target.checked) {
                                    // console.log(e.target.checked.value);
                                    setCheckedCategories([
                                      ...checkedCategories,
                                      e.target.value,
                                    ]);
                                  } else {
                                    setCheckedCategories(
                                      checkedCategories.filter(
                                        (checkedCategory) =>
                                          checkedCategory !==
                                          category.categoryName
                                      )
                                    );
                                    // setNewProduct({
                                    //   ...newProduct,
                                    //   relatedCategories: checkedCategories,
                                    // });
                                  }
                                }}
                                value={category.categoryName}
                                type="checkbox"
                                className="form-checkbox"
                              />
                              <span className="ml-2">
                                {category.categoryName}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="productPhoto"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category Photo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChangeImage}
                      name="productPhoto"
                      id="productPhoto"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-gray-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default ProductForm;
