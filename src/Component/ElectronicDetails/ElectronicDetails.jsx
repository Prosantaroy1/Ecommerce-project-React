import {  useLoaderData, useParams } from "react-router-dom";
import Jewellerypage from "../JewelleryPage/Jewellerypage";


const ElectronicDetails = () => {
    const cards = useLoaderData();
    //
    const {id} =useParams();
    //console.log(id)
    //find
    const details= cards.find(card=> card.id == id);
   
    return (
        <>
            <div className="px-16 pt-6">
                <div className="p-3 border-4">
                    <div className="flex gap-16">
                       <img src={details.product_img} alt="" className="w-[500px] h-80"/>
                       <div className="pt-4">
                         <h3 className="text-2xl font-semibold">Product Name: {details.item_name}</h3>
                          <p className="text-xl pb-4">Price: ${details.price}</p>
                          <button className="btn  btn-outline btn-info">Add Card</button>
                       </div>
                    </div>
                    <h3 className="font-semibold pt-4 text-2xl">description</h3>
                    <p className="text-xl w-">
                        {details.description_title}
                    </p>
                </div>        
            </div>
        {/*new product section*/} 
           <div>
             <Jewellerypage/>
           </div>
        </>
    );
};

export default ElectronicDetails;