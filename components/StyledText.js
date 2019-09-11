import Styled from "styled-components/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const StyledText = Styled.Text`
  font-size: ${props => (props.size ? props.size : wp("5%"))};
  color: ${props => (props.color ? props.color : "#FFFFFF")};
`;
export const TextLabel = Styled(StyledText)`
  font-family: 'montserrat-regular';
  
`;

export const TextLabelBold = Styled(StyledText)`
  font-family: 'montserrat-bold';
`;

export const MonoText = Styled(StyledText)`
  font-family: 'space-mono'
`;
