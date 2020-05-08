import React, { Component } from 'react';
import { YellowBox,
    StatusBar,
    Alert } from 'react-native';
import { 
    Container,
    Title,
    Symbol, 
    Footer,
    TitleBold,
AnimationLoading,} from './styles';
import{LaLogFunc} from '../../worldInfo/takeMyHorse';
export default class splash extends Component {
 
    constructor(props){
        super(props)
    
        console.disableYellowBox = true;
        
      }

      async componentDidMount(){
        await setTimeout(async () => {
          this.go('Home');
        },5000)

        
    }
    
        static navigationOptions = {
            header: null
        }
  
    go = (where,things) => {
      this.props.navigation.navigate('Home', {
        screen: where,
        params: things,
      });
    }

    go2 = (where,things) => {
      this.props.navigation.navigate('Rest', {
        screen: where,
        params: things,
      });
    }
    static navigationOptions = {
        header: null,
        tabBarVisible:false
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
                <Symbol/>
            <AnimationLoading source={require('../../images/loading.json')} autoPlay loop />
            <Footer>{this.state.dev}</Footer>    
        </Container>
        </>
            );
    }
}