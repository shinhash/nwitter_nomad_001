import { useState } from "react";
import { Error, Form, Input, Title, Wrapper } from "../components/auth-components";
import { confirmPasswordReset, createUserWithEmailAndPassword, sendPasswordResetEmail, applyActionCode, getAuth } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";


export default function ResetPassword(){

    const [email, setEmail] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onClick = async () => {
        setErrMessage("");
        try{
            /**
             * 임시회원가입 절차를 통해 가입된 이메일 계정인지 확인
             */
            const credentials = await createUserWithEmailAndPassword(auth, email, "test1234")
            credentials.user.delete();            
            alert("해당 이메일은 없는 계정입니다.");
        }catch(errorInfo1){
            
            if(errorInfo1 instanceof FirebaseError){
                console.log("errorInfo1.code : ", errorInfo1.code);
            }
            
            // await confirmPasswordReset(auth, "", "tlsgktmd123@gmail.com");
            // return;

            /**
             * 존재하는 이메일 계정일 경우 비밀번호 초기화 메일 전송처리
             */
            try{
                await sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Success Send Mail !!!");
                });
            }catch(errorInfo2){
                if(errorInfo2 instanceof FirebaseError){
                    console.log(errorInfo2.code);
                    if(errorInfo2.code == "auth/invalid-email"){
                        setErrMessage("Email 정보가 올바르지 않습니다.");
                    }
                }
            }
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
            {errMessage != "" ? <Error>{errMessage}</Error> : ""}
        </Wrapper>
    )
}