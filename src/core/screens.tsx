// Define the different example screens in this file

// UI components
import React from 'react';
import {render} from 'react-dom';
import {Grommet} from 'grommet';

// Define the screen types
export enum Screens {
  // eslint-disable-next-line no-unused-vars
  Example = 'example',
};

/**
 * General screen layout utility template
 * @param {any} props properties, namely the screen
 * @return {any}
 */
function ScreenLayout(props: { screen: any; }): any {
  return (
    <Grommet>
      {props.screen}
    </Grommet>
  );
}

/**
 * Example screen
 * @param {any} props properties for the component
 * @return {any}
 */
function ExampleScreen(props: any): any {
  return (
    <h1>
      Example Screen
    </h1>
  );
}

/**
 * Helper function to handle selection and display of screens
 * @param {SCREENS} _type the type of screen
 * @param {HTMLElement} _target target element
 * @param {any} _screenProps properties for the component
 */
export function displayScreen(
    _type: Screens,
    _target: HTMLElement,
    _screenProps: any) {
  console.debug(`Screen to display: '${_type}'`);
  if (_type === Screens.Example) {
    render(
        // eslint-disable-next-line new-cap
        ScreenLayout({
          // eslint-disable-next-line new-cap
          screen: ExampleScreen(_screenProps),
        }),
        _target
    );
  }
}