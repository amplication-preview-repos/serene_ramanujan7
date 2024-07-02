import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="base64" multiline source="base64" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
