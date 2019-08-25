/* eslint-disable */
import React from 'react';
import Loadable from 'react-loadable';
import path from 'path';
import Loading from './Loading';
import delay from '../utils/delay';

const LoadableExample = Loadable({
  loader: () => import('./Example'),
  loading: Loading,
});

export default function App() {
  return <LoadableExample />;
}
