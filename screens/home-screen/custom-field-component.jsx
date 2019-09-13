import React, { useState, createRef } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  FieldContainer,
  TextFieldContainer,
  StyledInput,
  ControlBtn
} from "./home-screen-styles";
import { TextLabelBold } from "components/StyledText";

const CustomFieldComponent = ({ fieldTitle, fieldType, secure, value }) => {
  const [editable, toggleEditable] = useState(false);
  const [fieldValue, updateField] = useState(value || "");

  const inputRef = createRef();
  return (
    <FieldContainer>
      <TextLabelBold
        size={wp("2.8%")}
        style={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
        {fieldTitle}
      </TextLabelBold>
      <TextFieldContainer>
        <StyledInput
          ref={inputRef}
          type={fieldType}
          secureTextEntry={secure}
          selectionColor="#FFF"
          value={fieldValue}
          font-size="20"
          editable={editable}
          focus={editable}
          autoFocus={editable}
          onChangeText={text => updateField(text)}
          style={{
            flex: 1,
            marginRight: 10
          }}
        />
        <ControlBtn
          active={!editable}
          onPress={() => {
            toggleEditable(!editable);
            if (editable) {
              inputRef.current.focus();
            }
          }}>
          <TextLabelBold size={wp("2.3%")} center>
            {!editable ? `Edit` : `Done`}
          </TextLabelBold>
        </ControlBtn>
      </TextFieldContainer>
    </FieldContainer>
  );
};

export default CustomFieldComponent;
