import Benefits from "./Benefits";
import Investment from "./Investment";
import SignUp from "./SignUp";
import Steps from "./Steps";

function SignUpWrapper() {
    return (
        <div>
            <SignUp/>
            <Investment/>
            <Steps/>
            <Benefits/>
        </div>
    );
}

export default SignUpWrapper;