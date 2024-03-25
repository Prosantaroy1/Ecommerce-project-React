
const Category = () => {
    return (
        <div className="pt-8">
            <h3 className="text-center font-bold text-2xl">Category All Product</h3>
            <div className="flex font-bold flex-wrap gap-10 pt-4 items-center justify-center">
                <div className="border hover:shadow-xl bg-red-200 text-purple-700 hover:bg-black hover:text-white p-10 rounded-xl">
                    T-shirt Fashion
                </div>
                <div className="border hover:shadow-2xl  bg-red-200 text-purple-700 rounded-xl hover:bg-black hover:text-white p-10">
                    Electronic Product
                </div>
                <div className="border hover:shadow-xl  bg-red-200 text-purple-700 hover:bg-black hover:text-white p-10 rounded-xl">
                    Jewellery Product
                </div>
                <div className="border hover:shadow-xl  bg-red-200 text-purple-700 hover:bg-black hover:text-white p-10 rounded-xl">
                    Other More
                </div>
            </div>
        </div>
    );
};

export default Category;