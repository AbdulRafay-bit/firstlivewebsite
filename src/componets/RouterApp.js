import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class RouterApp extends React.Component{
    render(){
        return(
            
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>

                            <li><a href="/contact">Contact</a></li>

                    </ul>
                </nav>
            
              
               
                </div>
          
        )
    }
}
export default RouterApp;