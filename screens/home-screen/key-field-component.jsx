import React, { useState } from "react";
import PropTypes from "prop-types";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import {
  StyledInput,
  FieldContainer,
  TextFieldContainer,
  ControlBtn,
  UnbindBtn
} from "./home-screen-styles";
import { TextLabelBold } from "components/StyledText";

const KeyFieldComponent = ({ keys }) => {
  const [showFields, toggleShowFields] = useState(false);

  const renderTextFields = keys => {
    return keys.map((key, index) => (
      <StyledInput
        key={index}
        type="password"
        secureTextEntry={!showFields}
        maxLength={4}
        selectionColor="#FFF"
        value={key}
        font-size="20"
        editable={false}
        center
      />
    ));
  };
  return (
    <FieldContainer style={{ marginBottom: 40 }}>
      <TextLabelBold
        size={wp("2.8%")}
        style={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
        My Key
      </TextLabelBold>
      <TextFieldContainer>
        {renderTextFields(keys)}
        <ControlBtn
          style={{
            opacity: 0.2
          }}
          onPress={() => {
            toggleShowFields(!showFields);
          }}
          activeOpacity={0.75}>
          <TextLabelBold size={wp("2.3%")} center>
            {showFields ? `Hide` : `Show`}
          </TextLabelBold>
        </ControlBtn>
      </TextFieldContainer>
      <UnbindBtn activeOpacity={0.75}>
        <TextLabelBold size={wp("3%")} center>
          Unbind
        </TextLabelBold>
      </UnbindBtn>
    </FieldContainer>
  );
};

KeyFieldComponent.propTypes = {
  keys: PropTypes.array.isRequired
};

export default KeyFieldComponent;
