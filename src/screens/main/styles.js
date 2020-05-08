import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Dimensions,
  Animated,
Platform,
FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Sw = Dimensions.get('window').width;
const Sh = Dimensions.get('window').height;
export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

export const CContainer = styled.ScrollView`
    background-color: #fff;
width:${Sw};
`;

export const Header =styled.View`
justify-content: center;
align-items: center;  
background-color: #fff;
margin-top:${Platform.OS == 'ios' ? 0 : getStatusBarHeight()-10};
width:${Sw};
height:70px;
`;

export const HeaderIcon = styled.Image.attrs({
    source: require("../../images/logo.png"),
    resizeMode: 'contain'

})`
    width: ${Platform.OS === 'ios' ? 45 : 40};
    height: ${Platform.OS === 'ios' ? 45 : 40};
    position:absolute;
    left:15; 
`;

export const HeaderName =styled.Text`
  text-align:center;
  font-size: ${Platform.OS === 'ios' ? 15 : 12};
  font-family:Roboto-Regular;
  color: #232323;
`;

export const SettingsButton = styled.TouchableOpacity`
position:absolute;
right:15;
`;

export const Settings =styled(Icon).attrs({
    name:'md-settings',
    size:Platform.OS === 'ios' ? 30 : 25,
    color:"#232323"
})`

`;

export const ListContainer = styled.View`
width:${Sw};
background:#fff;
align-items: center;
`;

export const ListActivities = styled(FlatList)`
width:${Sw};
`;

export const CardContainer = styled.View`
width:${Sw};
align-items: center;
`;

export const CardActivity = styled(Ripple).attrs({
    rippleColor:'#20472B',
    rippleDuration:800
  })`
  width: 95%;
  height: ${Platform.OS === 'ios' ? 180 : 170};
  background-color: #fff;
  border-radius: ${Platform.OS === 'ios' ? 5: 3};
  align-items: center;
  box-shadow: 0px 3px 6px rgba(35,35,35,0.3);
  elevation: 3;
  margin-bottom:20px;
  `;
  

export const CardHeaderActivity = styled.View`
width: 100%;
  height: ${Platform.OS === 'ios' ? 60 : 50};
  background-color:#3F8E55;
  border-top-left-radius: ${Platform.OS === 'ios' ? 5: 3};
  border-top-right-radius: ${Platform.OS === 'ios' ? 5: 3};
  flex-direction:row;
  align-items: center;
`;

export const CardHeaderActivityL = styled.View`
width: 100%;
  height: ${Platform.OS === 'ios' ? 60 : 50};
  background-color:#e5e5e5;
  border-top-left-radius: ${Platform.OS === 'ios' ? 5: 3};
  border-top-right-radius: ${Platform.OS === 'ios' ? 5: 3};
  justify-content: center;
`;

export const CardHeaderTitleActivity = styled.Text`
  text-align:justify;
  margin-left:10px;
  width:90%;
  font-size: ${Platform.OS === 'ios' ? 17 : 14};
  font-family:Roboto-Regular;
  color: #fff;
`;

export const CardBodyActivity = styled.View`
width:93%;

`;

export const CardBodyContentActivity = styled.Text`
  text-align:justify;
  width:100%;
  margin-top:8px;
  font-size: ${Platform.OS === 'ios' ? 15 : 12};
  font-family:Roboto-Regular;
  color: #232323;
`;













export const CardEvent = styled(Ripple).attrs({
  rippleColor:'#20472B',
  rippleDuration:800
})`
width: 95%;
height: ${Platform.OS === 'ios' ? 150 : 130};
background-color: #fff;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
box-shadow: 0px 3px 6px rgba(35,35,35,0.3);
elevation: 3;
margin-bottom:20px;
`;


export const CardHeaderEvent = styled.View`
width: 100%;
height: ${Platform.OS === 'ios' ? 60 : 50};
background-color:#0046C4;
border-top-left-radius: ${Platform.OS === 'ios' ? 5: 3};
border-top-right-radius: ${Platform.OS === 'ios' ? 5: 3};
justify-content: center;
`;

export const CardHeaderTitleEvent = styled.Text`
text-align:justify;
margin-left:10px;
width:90%;
font-size: ${Platform.OS === 'ios' ? 17 : 14};
font-family:Roboto-Regular;
color: #fff;
`;

export const CardBodyEvent = styled.View`
width:93%;

`;

export const CardBodyTitleEvent = styled.Text`
text-align:justify;
width:100%;
margin-top:8px;
font-size: ${Platform.OS === 'ios' ? 17 : 14};
font-family:Roboto-Medium;
color: #232323;
`;

export const CardBodyContentEvent = styled.Text`
text-align:justify;
width:100%;
margin-top:8px;
font-size: ${Platform.OS === 'ios' ? 15 : 12};
font-family:Roboto-Regular;
color: #232323;
`;

export const Duded = styled.Text`
text-align:justify;
margin-top:8px;
position:absolute;
right:15;
font-size: ${Platform.OS === 'ios' ? 15 : 12};
font-family:Roboto-Regular;
color: #ffffffaa;
`;











export const CardEventSoon = styled.View.attrs({
  rippleColor:'#20472B',
  rippleDuration:800
})`
width: 95%;
height: ${Platform.OS === 'ios' ? 150 : 130};
background-color: #fff;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
box-shadow: 0px 3px 6px rgba(35,35,35,0.3);
elevation: 3;
margin-bottom:20px;
`;


export const CardHeaderEventSoon = styled.View`
width: 100%;
height: ${Platform.OS === 'ios' ? 60 : 50};
background-color:#0046C4;
border-top-left-radius: ${Platform.OS === 'ios' ? 5: 3};
border-top-right-radius: ${Platform.OS === 'ios' ? 5: 3};
justify-content: center;
`;

export const CardHeaderEventSoonL = styled.View`
width: 100%;
height: ${Platform.OS === 'ios' ? 60 : 50};
background-color:#C42200;
border-top-left-radius: ${Platform.OS === 'ios' ? 5: 3};
border-top-right-radius: ${Platform.OS === 'ios' ? 5: 3};
justify-content: center;
`;

export const CardHeaderTitleEventSoon = styled.Text`
text-align:justify;
margin-left:10px;
width:90%;
font-size: ${Platform.OS === 'ios' ? 17 : 14};
font-family:Roboto-Regular;
color: #fff;
`;

export const CardBodyEventSoon = styled.View`
width:93%;

`;

export const CardBodyTitleEventSoon = styled.Text`
text-align:justify;
width:100%;
margin-top:8px;
font-size: ${Platform.OS === 'ios' ? 17 : 14};
font-family:Roboto-Medium;
color: #232323;
`;

export const CardBodyContentEventSoon = styled.Text`
text-align:justify;
width:100%;
margin-top:8px;
font-size: ${Platform.OS === 'ios' ? 15 : 12};
font-family:Roboto-Regular;
color: #232323;
`;



export const ButtonContainerEventSoon = styled.View`
width: 100%;
margin-bottom: 10;
margin-top: 10;
justify-content: center;
align-items: center;
`;
export const ButtonBoxEventSoon = styled(Ripple).attrs({
  rippleColor:'#fff',
  rippleDuration:800
})`
width: 100%;
height: ${Platform.OS === 'ios' ? 65 : 60};
background-color: #0046C4;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
justify-content: center;
`;

export const ButtonBoxEventSoonL = styled(Ripple).attrs({
  rippleColor:'#fff',
  rippleDuration:800
})`
width: 100%;
height: ${Platform.OS === 'ios' ? 65 : 60};
background-color: #C42200;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
justify-content: center;
`;

export const ButtonTitleEventSoon = styled(Animated.Text)`
color: #fff;
font-size: ${Platform.OS === 'ios' ? 16 : 12};
font-family: Roboto-Bold;
`;















export const CardClasses = styled(Ripple).attrs({
  rippleColor:'#fff',
  rippleDuration:800
})`
width: 95%;
height: ${Platform.OS === 'ios' ? 60 : 50};
background-color: #fff;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
align-items: center;
box-shadow: 0px 3px 6px rgba(35,35,35,0.3);
elevation: 3;
margin-bottom:20px;
`;


export const CardHeaderClasses = styled.View`
width: 100%;
height: 100%;
background-color:#20472B;
border-radius: ${Platform.OS === 'ios' ? 5: 3};
justify-content: center;
`;


export const CardHeaderTitleClasses = styled.Text`
text-align:justify;
margin-left:10px;
width:90%;
font-size: ${Platform.OS === 'ios' ? 17 : 14};
font-family:Roboto-Regular;
color: #fff;
`;

export const Warning = styled.Text`
text-align:center;
width:100%;
margin-top:10px;
margin-bottom:10px;
font-size: ${Platform.OS === 'ios' ? 17 : 15};
font-family:Roboto-Medium;
color: #232323;
`;