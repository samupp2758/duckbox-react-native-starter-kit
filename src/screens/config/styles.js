import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Ripple from 'react-native-material-ripple';
import { getStatusBarHeight } from 'react-native-status-bar-height';


import { Dimensions,
  Animated,
Platform} from 'react-native';

const Sw = Dimensions.get('window').width;
const Sh = Dimensions.get('window').height;
export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

export const Header =styled.View`
justify-content: center;
align-items: center;  
background-color: #fff;
width:${Sw};
height:70px;
margin-top:${Platform.OS == 'ios' ? 0 : getStatusBarHeight()-10};
`;


export const HeaderName =styled.Text`
  text-align:center;
  font-size: ${Platform.OS === 'ios' ? 15 : 12};
  font-family:Roboto-Regular;
  color: #232323;
`;

export const GoBackButton = styled.TouchableOpacity`
position:absolute;
left:15;
`;

export const GoBack =styled(Icon).attrs({
    name:'left',
    size:Platform.OS === 'ios' ? 30 : 25,
    color:"#232323"
})`

`;

export const Item = styled.View`
justify-content: center;
align-items: center;  
background-color: #fff;
width:${Sw};
height:60px;
`;

export const InfoLogged = styled.View`
background-color: #fff;
height:100%;
justify-content: center;
position:absolute;
left:15px;
`;
export const InfoLoggedTitle = styled.Text`
  text-align:justify;
  font-size: 20;
  font-family:Roboto-Bold;
  color:  #232323;
`;
export const InfoLoggedTitlew = styled.Text`
  text-align:justify;
  font-size: 15;
  font-family:Roboto-Regular;
  color:  #232323;
`;

export const InfoLoggedContent = styled.Text`
  text-align:justify;
  font-size: 10;
  font-family:Roboto-Regular;
  color:  #232323;
`;

export const InfoButtonContainer = styled.View`
width: ${Platform.OS === 'ios' ? 65 : 60};
position:absolute;
right:15px;
`;

export const InfoButton2Container = styled.View`
width: ${Platform.OS === 'ios' ? 85 : 80};
position:absolute;
right:15px;
`;


export const ButtonContainer = styled.View`
width: 100%;
margin-bottom: 10;
margin-top: 10;
justify-content: center;
align-items: center;
`;
export const ButtonBox = styled(Ripple).attrs({
  rippleColor:'#fff',
  rippleDuration:800
})`
width: 95%;
height: ${Platform.OS === 'ios' ? 40 : 35};
background-color: #3F8E55;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
justify-content: center;
box-shadow: 0px 3px 3px rgba(35,35,35,0.3);
elevation: 3;
`;

export const ButtonTitle = styled(Animated.Text)`
color: #fff;
font-size: ${Platform.OS === 'ios' ? 16 : 12};
font-family: Roboto-Bold;
`;