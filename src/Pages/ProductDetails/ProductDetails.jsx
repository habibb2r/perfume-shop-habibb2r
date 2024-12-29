import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/Common/useProductDetails";
import SectionTitle from "../../ReUseable-Components/SectionTitle";


const ProductDetails = () => {
    const itemId = useParams();
    const [details, itemRefetch,isLoading] = useProductDetails(itemId);
    
    return (
        <div className="pt-[10%]">
            <SectionTitle title={"A Symphony of Aroma and Artistry"}></SectionTitle>
        </div>
    );
};

export default ProductDetails;