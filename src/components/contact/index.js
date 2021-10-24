import React from 'react';

class Contact extends React.Component {
    render(){
        return(
            <li className= 'contato'>
                <img
                    className='contato-image'
                    src={this.props.photo}
                    alt={`contato ${this.props.name}`}
                />
                    <p>
                        <h2>{this.props.name}</h2> 
                        <h5>{this.props.description}</h5> 
                    </p>
            </li>
        )
    }
}

export default Contact;