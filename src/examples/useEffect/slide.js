import React from 'react';
import { Slide, ComponentPlayground, CodePane } from 'spectacle';
import { OldCode } from './old.js';
import { NewCode } from './new.js';
import styles from '../basic.css';
/* eslint import/no-webpack-loader-syntax: off */
export function UseEffectDemo() {
  const [showNew, setShowNew] = React.useState(false);

  return (
    <Slide align="center flex-start">
      <button onClick={() => setShowNew(!showNew)}>
        Showing {!showNew ? 'without hooks' : 'with Hooks'}
      </button>
      <div className={styles.container}>
        {!showNew ? (
          <>
            <CodePane
              lang="jsx"
              className={styles.code}
              source={require('!raw-loader!./old.js')}
            />
            <div className={styles.preview}>
              <OldCode />
            </div>
          </>
        ) : (
          <>
            <CodePane
              lang="jsx"
              className={styles.code}
              source={require('!raw-loader!./new.js')}
            />
            <div className={styles.preview}>
              <NewCode />
            </div>
          </>
        )}
      </div>
    </Slide>
  );
}
