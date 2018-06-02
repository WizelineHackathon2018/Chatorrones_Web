import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AWSAppSyncClient} from "aws-appsync";
import {Rehydrated} from "aws-appsync-react";
import {ApolloProvider} from "react-apollo";

const client = new AWSAppSyncClient({
    url: 'https://qa4idgtkyvgrrbapjgafr7a2mu.appsync-api.us-east-1.amazonaws.com/graphql',
    region: 'us-east-1',
    auth: {
        type: 'API_KEY',
        credentials: 'da2-ntor3a2bp5bthesajyay5q7aq4'
    }
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <Rehydrated>
            <App/>
        </Rehydrated>
    </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();
