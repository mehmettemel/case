import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const CategoriesForm = ({ setShowModal, showModal }) => {
  const { categories, setCategories } = useContext(DataContext);
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    categoryDesc: "",
    categoryPhoto: "",
  });
  const { categoryName, categoryDesc, categoryPhoto } = newCategory;
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeImage = (e) => {
    const target = e.target;
    const files = target.files;
    if (files) {
      const file = files[0];
      setNewCategory({ ...newCategory, categoryPhoto: file });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newCategory.categoryName ||
      !newCategory.categoryDesc ||
      !newCategory.categoryPhoto
    ) {
      alert("You need to fill all blank fields");
    } else {
      setCategories([newCategory, ...categories]);
      setShowModal(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-center text-xl font-bold">New Category Form</h2>
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
                      Category Name
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="categoryName"
                      id="categoryName"
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
                      name="categoryDesc"
                      id="categoryDesc"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category Photo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChangeImage}
                      name="categoryPhoto"
                      id="categoryPhoto"
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

export default CategoriesForm;
