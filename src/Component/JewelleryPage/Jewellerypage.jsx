import { useEffect, useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import JewelleryCard from "../JewelleryCard/JewelleryCard";

const Jewellerypage = () => {

     {/**useState */}
     const[products, setProducts] = useState([]);

     //useeffect
     useEffect(()=>{
         fetch('../../../public/jewellery.json')
         .then(res=> res.json())
         .then(data=>setProducts(data.slice(0,3)))
     },[]);

    return (
      <div className="px-16 pt-12">
        <h3 className="text-center font-bold text-2xl">Jewellery Accossories</h3>
        <div className="flex gap-4 pt-6">
            {
                products.map((product,idx)=><JewelleryCard
                  key={idx}
                  product={product}
                ></JewelleryCard>)
            }
        </div>
        <div className="flex justify-between px-60 pt-6">
          <button className="text-2xl"><GrCaretPrevious/></button>
          <button className="text-2xl"><GrCaretNext/></button>
       </div>
     </div>
    );
};

export default Jewellerypage;