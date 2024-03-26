import Electronicpage from "../../ElectronicPage/Electronicpage";
import Jewellerypage from "../../JewelleryPage/Jewellerypage";
import Fashionpage from "../FashionPage/Fashionpage";

const Shop = () => {
    return (
        <div className="pt-8">
            <Fashionpage/>
             <Electronicpage/>
            <Jewellerypage/>
        </div>
    );
};

export default Shop;