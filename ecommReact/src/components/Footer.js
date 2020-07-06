import React, { Component } from 'react' 
import {Link} from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div>
            <footer class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                 </div>
            </footer>
           </div>

        );
    }
}

export default Footer;