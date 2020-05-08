import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import { Dimensions,
  Animated,
Platform} from 'react-native';

const Sw = Dimensions.get('window').width;
const Sh = Dimensions.get('window').height;
export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const Symbol = styled.Image.attrs({
    source: require("../../images/logo.png"),
    resizeMode: 'contain'

})`
    width: 300px;
    height: 150px;  
`;


export const Title = styled.Text`
  text-align:center;
  font-size: 30px;
  font-weight: 100;
  margin-top: 10px;
  color: #232323;
`;

export const TitleBold = styled.Text`
  text-align:center;
  font-size: 30px;
  font-weight: bold;
  color:  #f3f3f3;
`;


export const Footer = styled.Text`
  text-align:center;
  position: absolute;
  bottom:10px;
  font-family: Roboto-Regular;
  font-size: 10px;
  color:  #232323;
`;


export const AnimationLoading = styled(LottieView).attrs({
  source:require('../../images/loading.json'), 
  autoPlay:true,
  loop:true,
})`
width: ${Platform.OS === 'ios' ? 60 : 55};
margin-top: 40px;
`;