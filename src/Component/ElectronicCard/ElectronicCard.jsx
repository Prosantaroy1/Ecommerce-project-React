/* eslint-disable react/prop-types */


const ElectronicCard = ({product}) => {
    const {product_img, price,item_name} = product;
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl">
               <button className="absolute bg-orange-400 px-3 py-1 rounded btn-warning">new</button>
               <figure>
                  <img src={product_img} alt="Shoes"  className="w-full h-80"/>
                </figure>
                <div className="flex justify-between py-4 px-4">
                   <h2 className="font-bold font-sans">Name: {item_name}</h2>
                   <p className="font-bold font-sans">price: {price}</p>
                 </div>
                 <div className="flex justify-between pb-3 px-4">
                    <button className="btn btn-outline btn-info">Add Card</button>
                    <button className="btn btn-outline btn-warning">More details</button>
                </div>
             </div>   
        </div>
    );
};

export default ElectronicCard;