import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
// interface Props{
//     TTT : string;
//     children : string;
// }

export default function ProtectedRoute({children}:{children:React.ReactNode}){
// export default function ProtectedRoute({children, tempTTT}:Props){
// export default function ProtectedRoute({TTT, children}:Props){
    const user = auth.currentUser;
    
    // console.log("TTT : ", TTT);
    console.log("user : ", user);
    console.log("children : ", children);
    if(user === null){
        return <Navigate to="/login" />
    }
    return children;
}