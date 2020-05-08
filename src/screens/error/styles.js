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
