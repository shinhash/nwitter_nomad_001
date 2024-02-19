import { useState } from "react";
import { NweetAttachFileButton, NweetAttachFileInput, NweetForm, NweetSubmitBtn, NweetTextArea } from "./auth-components";

export default function PostNweetForm(){

    const [ isLoading, setIsLoading ] = useState(false);
    const [ nweet, setNweet ] = useState("");
    const [ file, setFile ] = useState<File>();
    const onNweetChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setNweet(e.target.value);
    }
    const onFileChange = (e : React.ChangeEvent<HTMLInputElement>) => {

        // const temp = e.target.files;
        // console.log(temp);

        const { files } = e.target;
        if(files && files.length >= 1){
            setFile(files[0]);
        }
        console.log("files : ",files);
    }
    const submit = () => {
        console.log("file : ", file);
        setIsLoading(true);
    }

    return (
        <NweetForm>
            <NweetTextArea rows={5} maxLength={180} placeholder="What is happening?" value={nweet} onChange={onNweetChange}/>
            <NweetAttachFileButton htmlFor="file">{file ? file.name + " ✅" : "Add Photo"}</NweetAttachFileButton>
            <NweetAttachFileInput type="file" id="file" accept="image/*" onChange={onFileChange}/>
            <NweetSubmitBtn type="submit" onClick={submit} value={isLoading ? "Posting..." : "Post Nweet"} />
        </NweetForm>
    );
}