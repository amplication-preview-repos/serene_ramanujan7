import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="base64" multiline source="base64" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
