// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Notes,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  MarkdownSlides,
  Magic,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

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
      </Deck>
    );
  }
}