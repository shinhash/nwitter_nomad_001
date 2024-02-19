import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function CreateAccount(){

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        // const { name, value } = e.target;
        const { target: {name, value} } = e;
        if(name === "name"){
            setName(value);
        }else if(name === "email"){
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
        console.log(name, email, password);
        if(isLoading || name === "" || email === "" || password === "") return;
        try {
            setLoading(true);
            // create an account
            // set the name of the user
            // redirect to the home page 
            /**
             * createUserWithEmailAndPassword
             * 입력한 정보로 계정생성()
             * 
             */
            setError("");
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {displayName: name,});
            navigate("/home");
        } catch (e) {
            // setError
            // console.log((e as FirebaseError).code);
            if(e instanceof FirebaseError){
                console.log(e.code);
                console.log(e.name);
                console.log(e.message);
                const errorCode = e.code;
                switch(errorCode){
                    case "auth/weak-password" : 
                        return setError("입력하신 비밀번호의 길이가 6자리 이하입니다.")
                    case "auth/email-already-in-use" : 
                        return setError("입력하신 이메일은 이미 사용중인 이메일입니다.")
                }
            }
        } finally{
            setLoading(false);
        }
    };

    return (
    <Wrapper>
        <Title>Join Ⅹ</Title>
        <Form onSubmit={onSubmit}>
            <Input name="name"     onChange={onChange} value={name}     placeholder="Name"     type="text"     required />
            <Input name="email"    onChange={onChange} value={email}    placeholder="Email"    type="email"    required />
            <Input name="password" onChange={onChange} value={password} placeholder="password" type="password" required />
            <Input type="submit" value={ isLoading ? "loading..." : "Create Account" } />
            
            {/* <input type="text" id="temp" />
            <input type="button" onClick={ccc} value="button" /> 
            */}
        </Form>
        <br />
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Already have an account? <Link to="/login">Log In</Link>
        </Switcher>
        <Switcher>
            forget password? <Link to="/reset-password">Reset Password</Link>
        </Switcher>
        <GithubButton />
    </Wrapper>
    );
}