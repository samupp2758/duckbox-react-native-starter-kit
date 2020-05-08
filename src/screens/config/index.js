import React, { Component } from 'react';
import { YellowBox,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    Container,
    Header,
HeaderName,
GoBack,
GoBackButton,
Item,
InfoLoggedTitle,
InfoLoggedTitlew,
InfoButtonContainer,
InfoButton2Container,
InfoLoggedContent,
InfoLogged,
ButtonContainer,
ButtonBox,
ButtonTitle} from './styles';
export default class config extends Component {
 
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

    sinout = () => {
        this.saveHistoryOfUse()
        this.go('Splash')
    }

    saveHistoryOfUse = async () => {
        try {
          await AsyncStorage.setItem('@Logged', '0')
          await AsyncStorage.setItem('@Type', '0')
        } catch (e) {
          // saving error
        }
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
            <Header>
            {Platform.OS == 'ios' ? <GoBackButton onPress={()=>{this.props.navigation.goBack()}}>
                <GoBack/>
                </GoBackButton> : <></>}
                <HeaderName>Configurações</HeaderName>
            </Header>
            <Item>
                <InfoLogged>
        <InfoLoggedTitle>{this.props.route.params.user.name}</InfoLoggedTitle>
        <InfoLoggedContent>{this.props.route.params.user.email}</InfoLoggedContent>
                </InfoLogged>
                <InfoButtonContainer>
                    <ButtonContainer>
                        <ButtonBox onPress={() => {this.sinout()}}>
                            <ButtonTitle>Sair</ButtonTitle>
                        </ButtonBox>
                    </ButtonContainer>
                </InfoButtonContainer>
            </Item>
           
        </Container>
        </>
            );
    }
}

/*
 <Item>
                <InfoLogged>
        <InfoLoggedTitlew>DarkMode</InfoLoggedTitlew>
       </InfoLogged>
                <InfoButton2Container>
                    <ButtonContainer>
                        <ButtonBox>
                            <ButtonTitle>Ativar</ButtonTitle>
                        </ButtonBox>
                    </ButtonContainer>
                </InfoButton2Container>
            </Item>
            */