import { styled } from "styled-components"
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;

const Title = styled.h1`
    font-size: 42px;
`;

const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export default function CreateAccount(){

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        const { target: {name, value} } = e;
        if(name === "name"){
            setName(value);
        }else if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };
    
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
        } catch (error) {
            // setError
            setError("Exception !!!");
            console.log(error);
        } finally{
            setLoading(false);
        }
    };

    return (
    <Wrapper>
        <Title>Join χ</Title>
        <Form onSubmit={onSubmit}>
            <Input name="name"     onChange={onChange} value={name}     placeholder="Name"     type="text"     required />
            <Input name="email"    onChange={onChange} value={email}    placeholder="Email"    type="email"    required />
            <Input name="password" onChange={onChange} value={password} placeholder="password" type="password" required />
            <Input type="submit" value={ isLoading ? "loading..." : "Create Account" } />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
    );
}