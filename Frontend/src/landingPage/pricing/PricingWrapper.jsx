import AddedServiceCharge from "./AddedServiceCharges";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccCharge from "./OpenAccCharge";

function PricingWrapper() {
    return (  
        <div>
        <Hero/>
        <Brokerage/>
        <OpenAccCharge/>
        <AddedServiceCharge/>
        </div>
    );
}

export default PricingWrapper;