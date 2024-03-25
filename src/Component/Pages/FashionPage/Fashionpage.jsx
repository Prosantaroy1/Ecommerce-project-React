import { useEffect, useState } from "react";
import Fashioncard from "../FashionCard/Fashioncard";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Fashionpage = () => {
    //useState data store
    const[products, setProducts] = useState([]);

    //useeffect
    useEffect(()=>{
        fetch('../../../../public/Fashion.json')
        .then(res=> res.json())
        .then(data=>setProducts(data.slice(0,3)))
    },[]);
    //console.log(proructs);
    return (
        <div className="px-16">
            <h3 className="text-center font-bold text-2xl">Man & Woman Fashion</h3>
            <div className="flex gap-4 pt-6">
                {
                    products.map((product,idx)=><Fashioncard 
                     key={idx}
                     product={product}
                    ></Fashioncard>)
                }
            </div>
            <div className="flex justify-between px-60 pt-6">
              <button className="text-2xl"><GrCaretPrevious/></button>
              <button className="text-2xl"><GrCaretNext/></button>
           </div>
        </div>
    );
};

export default Fashionpage;