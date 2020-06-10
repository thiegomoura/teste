import React, {Component} from 'react'
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Delete from '@material-ui/icons/Delete'
import AddButton from '../components/addButton'
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
            <Grid container className="grid">
            <List className="lista">
                {dwellers.map(dweller =>(
                    
                <ListItem className="lista-item">
                    <Avatar>
                        <AccountCircle />
                    </Avatar>
                    <ListItemText primary={dweller.name} secondary={dweller.telephone}></ListItemText>
                    <p></p>
                    <Delete style={{color: '#bdbdbd'}}>Excluir</Delete>
                </ListItem>
                ))}
            </List>
            </Grid>
            <AddButton />
        </div>
    )
    }
    };
};

export default Dweller;