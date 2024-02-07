import { auth } from "../firebase";

export default function Home(){

    const logOut = function () {
        console.log(auth.currentUser);
        auth.signOut();
    };

    return (
        <div>
            <h2>Home!!!</h2>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}