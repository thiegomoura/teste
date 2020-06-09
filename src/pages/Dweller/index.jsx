import React, {Component} from 'react'
import api from '../../services/api';



class Dweller extends Component {
    state = {
        isLoaded: false,
        dwellers: [],
    }
    
    async componentDidMount(){
        const response = await api.get('dwellers');
        this.setState({
            isLoaded: true,
            dwellers: response.data.docs            
        })
    }

    render() {
    
    const {isLoaded, dwellers } = this.state;

    if(!isLoaded){
        return <div>Loading..</div>
    }
    else{
    return(
        <div>
            <header>
            </header>
            <h1>Moradores</h1>
                {dwellers.map(dweller =>(
                <li>
                    <h2>
                        <strong>{dweller.name}</strong>
                        <p></p>
                    </h2>
                </li>
                ))}
        </div>
    )
    }
    };
};

export default Dweller;