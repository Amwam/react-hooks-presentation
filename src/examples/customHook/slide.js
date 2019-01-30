import React from 'react';
import { Slide, CodePane } from 'spectacle';
import { NewCode } from './customHook';
import styles from '../basic.css';
/* eslint import/no-webpack-loader-syntax: off */
export function CustomHookDemo() {
  return (
    <Slide align="center flex-start">
      <div className={styles.container}>
        <CodePane
          lang="jsx"
          className={styles.code}
          source={require('!raw-loader!./customHook.js')}
        />
        <div className={styles.preview}>
          <NewCode />
        </div>
      </div>
    </Slide>
  );
}
