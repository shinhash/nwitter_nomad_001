import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Logo } from "../components/auth-components";

export default function GithubButton(){
    const navigate = useNavigate();
    const onClick = async () => {
        try{
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            // await signInWithRedirect(auth, provider);
            navigate("/home");
        }catch(error){
            console.error(error);
        }
    }

    return (
    <Button onClick={onClick}>
        <Logo src="/github-logo.png" />
        Continue with Github
    </Button>
    );
}