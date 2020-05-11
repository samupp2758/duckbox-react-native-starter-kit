import React, { Component } from 'react';
import { YellowBox,
    StatusBar,
    Alert,
  Animated } from 'react-native';
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
        await Animated.timing(
          this.state.opacity,
          {
            toValue: 1,
            duration: 1000,
          }
        ).start();
        await setTimeout(async () => {
          this.go('Home');
        },4000)

        
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
    static navigationOptions = {
        header: null,
        tabBarVisible:false
    }
    state = {
      dev: "Desenvolvido por DuckBox Company",
      opacity:new Animated.Value(0)
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
        <SymbolContainer
          style={{opacity:this.state.opacity}}>
                <Symbol/>
                </SymbolContainer>
            <AnimationLoading source={require('../../images/loading.json')} autoPlay loop />
            <Footer>{this.state.dev}</Footer>    
        </Container>
        </>
            );
    }
}