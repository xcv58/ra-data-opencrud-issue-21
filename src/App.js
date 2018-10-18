import React, { Component } from 'react';
import buildOpenCrudProvider from 'ra-data-opencrud';
import { Admin, Resource, List, Datagrid, TextField } from 'react-admin';
import logo from './logo.svg';
import './App.css';

const uri = 'https://eu1.prisma.sh/yihong-ed6b25/demo/dev'

export const PostList = (props) => (
  <List {...props} filter={{ title_in: ["Hello World", "My Second Post"] }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="isPublished" />
      <TextField source="text" />
    </Datagrid>
  </List>
);

class App extends Component {
  state = { dataProvider: null }

  componentDidMount() {
    buildOpenCrudProvider({
      clientOptions: { uri }
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      );
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="Post" list={PostList} />
      </Admin>
    );
  }
}

export default App;
