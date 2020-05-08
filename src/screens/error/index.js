import React, { Component } from 'react';
import { YellowBox,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    Container,} from './styles';
import{LaLogFunc} from '../../worldInfo/takeMyHorse';
export default class error extends Component {
 
    constructor(props){
        super(props)
    
        console.disableYellowBox = true;
        
      }
      async componentDidMount(){
    }
    
        static navigationOptions = {
            header: null
        }
    go = (where,things) => {
        this.props.navigation.push(where,things)
    }
    static navigationOptions = {
        header: null
    }
    state = {
      dev: "Desenvolvido por DuckBox Company",
    }

    render() {
        return (
            <>
            <StatusBar
      backgroundColor="#fff"
      translucent
      barStyle="dark-content"
    />
        <Container>
        </Container>
        </>
            );
    }
}