import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { SportList } from "./sport/SportList";
import { SportCreate } from "./sport/SportCreate";
import { SportEdit } from "./sport/SportEdit";
import { SportShow } from "./sport/SportShow";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SportsBlogService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Sport"
          list={SportList}
          edit={SportEdit}
          create={SportCreate}
          show={SportShow}
        />
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
