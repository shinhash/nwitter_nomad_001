import styled from "styled-components";
import PostNweetForm from "../components/post-nweet-form";

const Wrapper = styled.div``;

export default function Home(){
    return (
        <Wrapper>
            <PostNweetForm />
        </Wrapper>
    );
}