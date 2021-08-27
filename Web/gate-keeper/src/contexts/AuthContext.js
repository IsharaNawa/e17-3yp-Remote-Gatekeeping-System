import React  , {createContext , useState , useEffect}from 'react'
import { auth  ,db} from '../config/fbConfig';


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = ({email, password}) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const signin = ({email , password}) => {
        //console.log("Email : " ,email ,"password", password)
        return auth.signInWithEmailAndPassword(email , password);
    }

    const signout = () => {
       
        return auth.signOut();
    }

    const value = {
        user , 
        signup,
        signin,
        signout
    }

    useEffect(() => {
        const userState  = auth.onAuthStateChanged( user => {
            //console.log("User : " ,user)
            setUser(user)
            setLoading(false)
        })
    })



    return (
      <AuthContext.Provider value = {value}>
          {!loading  && props.children}
      </AuthContext.Provider>
    )
}

export default AuthContextProvider