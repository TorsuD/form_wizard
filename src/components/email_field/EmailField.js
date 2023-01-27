import React from "react";
import { TextInput } from "@mantine/core";
import { FiAtSign } from "react-icons/fi";

function EmailField(props) {
  return (
    <div>
      <TextInput
        label={props.title}
        placeholder="Your email"
        icon={<FiAtSign size={14} />}
      />
      ;
    </div>
  );
}

export default EmailField;
