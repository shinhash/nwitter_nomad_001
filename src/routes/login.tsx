import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function Login(){

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        // const { name, value } = e.target;
        const { target: {name, value} } = e;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };

    // const ccc = () => {
    //     const textTemp = document.getElementById("temp") as HTMLInputElement;
    //     alert(textTemp?.value);
    // }
    
    const onSubmit = async ( e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(email, password);
        if(isLoading || email === "" || password === "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            setError("");
            navigate("/home");
        } catch (e) {
            if(e instanceof FirebaseError){
                const errorCode = e.code;
                console.log(errorCode);
                console.log(e.message);
                /*
                "auth/user-not-found", "auth/wrong-password" 오류는
                "auth/invalid-login-credentials" 로 축소 됨
                */
                switch(errorCode){
                    case "auth/invalid-login-credentials" : 
                        return setError("입력하신 이메일 혹은 비밀번호를 확인해주세요.")
                    case "auth/too-many-requests" : 
                        return setError("잠시 후 다시 시도해주세요.")
                }
            }
        } finally{
            setLoading(false);
        }
    };

    return (
    <Wrapper>
        <Title>Log In Ⅹ</Title>
        <Form onSubmit={onSubmit}>
            <Input name="email"    onChange={onChange} value={email}    placeholder="Email"    type="email"    required />
            <Input name="password" onChange={onChange} value={password} placeholder="password" type="password" required />
            <Input type="submit" value={ isLoading ? "loading..." : "Log In" } />
            
            {/* <input type="text" id="temp" />
            <input type="button" onClick={ccc} value="button" /> 
            */}
        </Form>
        <br />
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Don't have an account? <Link to="/create-account">Create Account</Link>
        </Switcher>
        <Switcher>
            forget password? <Link to="/reset-password">Reset Password</Link>
        </Switcher>
        <GithubButton />
    </Wrapper>
    );
}