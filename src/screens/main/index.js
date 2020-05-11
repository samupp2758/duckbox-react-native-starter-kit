import React, { Component } from 'react';
import { YellowBox,
    StatusBar,
RefreshControl, 
Dimensions,
Text
} from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import AsyncStorage from '@react-native-community/async-storage';
import { 
    Container,} from './styles';
import timer from 'react-native-timer';
const Sw = Dimensions.get('window').width;
const Sh = Dimensions.get('window').height;
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
    ];
export default class main extends Component {
 
    constructor(props){
        super(props)
    
        console.disableYellowBox = true;
        
      }
      async componentDidMount(){
           await this.onRefresh()
    }

    componentWillUnmount(){
        timer.clearInterval(this);
    }

   
    
        static navigationOptions = {
            header: null
        }
        go = (where,things) => {
            this.props.navigation.push(where,things);
      
          }
      
          go2 = (where,things) => {
            this.props.navigation.navigate(where,things);
          }
    state = {
    refreshing:false,
      dev: "Desenvolvido por DuckBox Company",
    }

    onRefresh = async () => {
       this.setState({refreshing:true})
       setTimeout(()=>{
           this.setState({refreshing:false})
        },400)
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
