import React from 'react';

import Contact from '../../components/contact';
import DATA from '../../assets/contatos.js';


class Home extends React.Component{
    render(){
        return(
            <div className='contatos'>
                {DATA.map((item)=>(
                    <Contact 
                        key={item.id}
                        name={item.name}
                        photo={item.image}
                        description={item.description}
                    />
                ))}
            </div>
        )
    }
}

export default Home;