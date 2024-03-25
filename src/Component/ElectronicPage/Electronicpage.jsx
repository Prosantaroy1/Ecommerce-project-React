import { useEffect, useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import ElectronicCard from "../ElectronicCard/ElectronicCard";


const Electronicpage = () => {
    {/**useState */}
    const[products, setProducts] = useState([]);

    //useeffect
    useEffect(()=>{
        fetch('../../../public/electronic.json')
        .then(res=> res.json())
        .then(data=>setProducts(data.slice(0,3)))
    },[]);

    return (
        <div className="px-16 pt-12">
        <h3 className="text-center font-bold text-2xl">Electronic Product</h3>
        <div className="flex gap-4 pt-6">
            {
                products.map((product,idx)=><ElectronicCard
                 key={idx}
                 product={product}
                ></ElectronicCard>)
            }
        </div>
        <div className="flex justify-between px-60 pt-6">
          <button className="text-2xl"><GrCaretPrevious/></button>
          <button className="text-2xl"><GrCaretNext/></button>
       </div>
    </div>
    );
};

export default Electronicpage;