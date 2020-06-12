import React, {Component, Label} from 'react'
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import './styles.css';

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
            <h1>Moradores</h1>
            <div container className="grid">
            <ul className="lista">
                {dwellers.map(dweller =>(
                <li className="lista-item">
                    <div className="grid-item">
                    Nome:{dweller.name}
                    </div>
                    <div className="grid-item">
                    Telefone:
                    {dweller.telephone}
                    </div>
                    <hr></hr>

                </li>
                ))}
            </ul>
            </div>
        </div>
    )
    }
    };
};

export default Dweller;