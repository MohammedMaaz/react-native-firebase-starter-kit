import React from 'react';
import {LogBox} from 'react-native';
import dva from 'dva';
import createLoading from 'dva-loading';
import {createMemoryHistory} from 'history';
import {globalErrorHandler} from './src/utils/errorHandler';
import Router from './src/views/Router';
import {Root} from 'native-base';

// ignore
LogBox.ignoreLogs([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: isMounted(...) is deprecated',
]);

export const app = dva({
  history: createMemoryHistory(),
  onError(e, dispatch) {
    globalErrorHandler(e, dispatch);
  },
});
app.use(createLoading());

app.model(require('./src/models/home').default);

app.router(() => <App />);

const App = () => {
  return (
    <Root>
      <Router />
    </Root>
  );
};

export default app.start();
