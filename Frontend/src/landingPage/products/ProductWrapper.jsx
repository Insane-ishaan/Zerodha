import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductWrapper() {
    return ( 
        <div>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        </div>
     );
}

export default ProductWrapper;