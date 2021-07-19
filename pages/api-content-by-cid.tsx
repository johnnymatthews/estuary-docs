import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const markdown = `# ➟ /content/by-cid/:cid

Use this to get metadata around the storage per CID.

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.estuary.tech/content/by-cid/bafybeib6c6x4ck65yeazd6mnh3tc65ftasvte7mt6kjiluucfvaquqo5du',{
        method: "GET",
        headers: {
          Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
        },
      })
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ ...data });
      });
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 1)}</pre>;
  }
}`;

const curl =
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/content/by-cid/bafybeib6c6x4ck65yeazd6mnh3tc65ftasvte7mt6kjiluucfvaquqo5du';

function APIContentByCID(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/by-cid/:cid"
      description="https://api.estuary.tech/content/by-cid/:cid"
      url="https://docs.estuary.tech/api-content-by-cid"
      active="api-content-by-cid"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIContentByCID;