import React , {useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Dowonload from './Dowonload'


const  HomePage = () => {

    const {user} = useContext(AuthContext)

    if(user != null) { return <Redirect to='/dashboard'/> }
 
    return (
        <div >
            <div className="home grey darken-3">
                <div className='heroText '>
                    <h2 >Secure Your Delevery, Child & Home</h2>
                    <p>
                    
                        <b> When you are not being at home, and delevery come to the door. </b>
                         What will happen to the delevery.<br/><br/>
                        <b> In this pandamic situation, Interact with your outsiders specialy taking a delevery. 
                            </b> Is that okay<br/><br/>
                        
                        <b> When your are not at home is it safe to interact your child with your out siders </b>

                    </p>
                    <h5>We weill give your the best soution</h5>

                    <div class='heroButtons z-depth-5'>

                        <span >
                            Contact 
                            <Link to='/contactus' class="btn-floating cyan accent-4 pulse">
                                <i class="material-icons">contact_page</i>
                            </Link>
                        </span>

                        <span >
                            Download App
                            <Link to='/download' class="btn-floating  light-blue darken-4 pulse">
                                <i class="material-icons">get_app</i>
                            </Link>
                        </span>
                    
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default HomePage