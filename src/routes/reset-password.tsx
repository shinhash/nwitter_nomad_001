import { useState } from "react";
import { Form, Input, Title, Wrapper } from "../components/auth-components";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";


export default function ResetPassword(){

    const [email, setEmail] = useState("");

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onClick = async () => {
        try{
            await sendPasswordResetEmail(auth, email);
        }catch(err){
            console.error("errorType2 : ", err);
        }
        
    }

    return (
        <Wrapper>
            <Title>Reset Password</Title>
            <Form>
                <Input name="email"    onChange={onChange} value={email}    placeholder="Email"    type="email"    required />
                <Input type="button" onClick={onClick} value="Reset Password!!!" />
            </Form>
            <br />
        </Wrapper>
    )
}