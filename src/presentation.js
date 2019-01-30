// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Notes,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  CodePane,
} from 'spectacle';

import { BasicDemo } from './examples/basic/slide';
import { MultipleDemo } from './examples/multiple/slide';
import { UseEffectDemo } from './examples/useEffect/slide';
import { CustomHookDemo } from './examples/customHook/slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Require CSS
require('normalize.css');

// Original default theme
const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

// solarised dark theme
const initialTheme = createTheme(
  {
    primary: '#042B35',
    secondary: '#D2A03E',
    tertiary: '#FD853D',
    quartenary: '#A7A7A7',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

// export const theme = {
//   ...initialTheme,
//   screen: {
//     ...initialTheme.screen,
//     components: {
//       ...initialTheme.screen.components,
//       code: {
//         ...initialTheme.screen.components.code,
//         color: initialTheme.screen.colors.quartenary,
//       },
//       text: {
//         ...initialTheme.screen.components.text,
//         color: initialTheme.screen.colors.quartenary,
//       },
//       link: {
//         ...initialTheme.screen.components.link,
//         color: initialTheme.screen.colors.secondary,
//       },
//     },
//   },
// };

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading size={1}>What are hooks?</Heading>
        </Slide>
        <Slide>
          <Notes>
            Hooks are an API for using state, and other features without writing
            a clas in React
          </Notes>
          <Heading size={1}>What are hooks?</Heading>
          <div>New React APIs</div>
        </Slide>
        <Slide>
          <Notes>
            <h4>Code reuse</h4>

            <ul>
              <li>
                <p>
                  It is really hard to share code between components when state
                  is involved.
                </p>
              </li>

              <li>
                <p>
                  We’ve used multiple workarounds in the past, like HOCs or
                  using global state (Redux)
                </p>
              </li>
            </ul>

            <h4>React Lifecycle is hard to understand</h4>

            <ul>
              <li>
                <p>
                  Lots of methods, most of the time are unneeded (like
                  componentDidMount and componentWillUnmount)
                </p>
              </li>

              <li>
                <p>Lots of bugs from lack of understanding of the lifecycle</p>
              </li>

              <li>
                <p>Can’t split up easily</p>
              </li>
            </ul>

            <h4>Classes are hard to understand</h4>

            <ul>
              <li>
                <p>`this` keyword doesn’t always make sense (in JS)</p>
              </li>

              <li>
                <p>
                  Classes encourage patterns (OOP) which don’t always work well
                  in React, and become hard to optimise
                </p>
              </li>

              <li>
                <p>
                  React components are usually thought of as functions (just the
                  render() part)
                </p>
              </li>
            </ul>
          </Notes>
          <Heading size={1}>Why hooks?</Heading>
          <List>
            <ListItem>Code reuse</ListItem>
            <ListItem>React's lifecycle is hard to understand</ListItem>
            <ListItem>Classes are hard to understand</ListItem>
          </List>
        </Slide>
        <Slide align="center flex-start">
          <video
            preload="auto"
            autoplay={true}
            controls={true}
            loop={true}
            type="video/mp4"
            height={window.height / 2}
          >
            <source
              src="https://video.twimg.com/tweet_video/DqsCilOU0AAoS7P.mp4"
              type="video/mp4"
            />
          </video>
        </Slide>
        <Slide>
          <Heading size={1}>When to use Hooks?</Heading>
        </Slide>
        <Slide>
          <Notes>
            <h1>Classes aren’t going to be removed from React</h1>

            <h1>Somethings (1% of cases) hooks can’t cover yet</h1>

            <h1>
              I’m going to try and use them as much as possible, as I think they
              are better option.
            </h1>

            <pre>
              <code>* No requirement to use them though</code>
            </pre>
          </Notes>
          <Heading size={1}>When to use Hooks?</Heading>
          <Heading size={2}>Whenever you want</Heading>
        </Slide>
        <Slide>
          <Notes>
            Classes aren't going away, so there isn't any need to rewrite
          </Notes>
          <Heading size={1}>DON’T REWRITE EXISTING CODE</Heading>
          <p>
            (Unless you <em>really really</em> want to.)
          </p>
        </Slide>
        <Slide>
          <Heading size={2}>Demo time</Heading>
        </Slide>

        <BasicDemo />
        <MultipleDemo />
        <Slide>
          <Heading size={2}>Multiple useState calls</Heading>
          <p>
            Each key you would normally have in state, becomes a single{' '}
            <code>usesState</code> call
          </p>
          <CodePane
            language="jsx"
            source={`this.state = {
  buttonPressed: true,
  buttonText: 'My Button'
}`}
          />
          Becomes:
          <CodePane
            language="jsx"
            source={`
const [buttonPressed, setButtonPressed] = React.useState(true);
const [buttonText, setButtonText] = React.useState('My Button);`}
          />
        </Slide>
        <UseEffectDemo />
        <CustomHookDemo />
        <Slide>
          <Heading size={2}>Other hooks</Heading>
          <a href="https://reactjs.org/docs/hooks-reference.html">
            https://reactjs.org/docs/hooks-reference.html
          </a>
        </Slide>
        <Slide>
          <Heading size={1}>Rules</Heading>
          <List>
            <ListItem>
              Only Call Hooks at the Top Level
              <ListItem>Keep the same order each time</ListItem>
              <ListItem>
                Don't use conditionals with hooks <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<code>if</code>, <code>for</code>
                , <code>switch</code>...etc)
              </ListItem>
            </ListItem>

            <ListItem>Only Call Hooks from React Functions</ListItem>
            <ListItem>
              Custom hooks start with <code>use</code>
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.g.
              <code>useMousePointer()</code>
            </ListItem>
          </List>
        </Slide>
        <Slide align="center flex-start">
          <Heading size={2}>With TypeScript</Heading>
          <img src={require('./examples/typescript/screenshot.png')} />
        </Slide>
      </Deck>
    );
  }
}
