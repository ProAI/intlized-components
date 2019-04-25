# Intlized Components

This package provides an easy way for internationalization support in React.js apps.

## Problem

In many - but not all - cases language variables are tied to one component in React, but most i18n libraries do not fit into a component based approach.

## Solution

This package solves this issue and helps you to define language messages component based by providing component based dictionaries. Also each prop of a component can be "intlized", so that it can be used with a language variable or with formatting (date time, number and time ago).

## Installation

```shell
npm install intlized-components
# or
yarn add intlized-components
```

## Examples

### Translation Example

The most convient way to use intlized components is to create a local dictionary for every component, define intlized components and use the predefined `<Trans>` component. Basically with intlized components you can use any component as intlized component, just import the `intlized` function and wrap the component. But in most cases you need nothing more than the `<Trans>` component.

```jsx
import React from 'react';
import { createDict, intlized, Trans } from 'intlized-components';

// Create local dictionary: Define a scope, then define the messages with the default translation
const dict = createDict('RegistrationForm', {
  welcome: 'Welcome {name}',
  inputPlaceholder: 'Your name...',
  imageAlt: 'This image was created on {date}',
});

// wrap components, intlize props
const IntlizedInput = intlized('input', ['placeholder']);
const IntlizedImage = intlized('img', ['alt']);

// use defined messages
export default function() {
  return (
    <div>
      {/* Basic translation with variable */}
      <Trans {...dict('welcome', { name: 'dude' })} />

      {/* Intlized attribute placeholder */}
      <IntlizedInput placeholder={dict('inputPlaceholder')} />

      {/* Intlized attribute with date formatting util */}
      <IntlizedImage
        alt={({ dateTime }) =>
          dict('imageAlt', { date: dateTime('2017-07-07') })
        }
      />
    </div>
  );
}
```

### Formatting Example

Furthermore you can format dates and numbers without intlized components:

```jsx
import React from 'react';
import { DateTime, TimeAgo, Number } from 'intlized-components';

export default function({ name }) {
  return (
    <div>
      <DateTime value="2017-07-07" />
      <TimeAgo value="2017-07-07" />
      <Number value={1000} />
    </div>
  );
}
```

Note that all formatting components use the `Intl` api which is supported by most browsers and also [Node.js](https://nodejs.org/api/intl.html). Only `Intl.RelativeTimeFormat` is relatively new and not widely supported, so we suggest to use a polyfill like [relative-time-format](https://github.com/catamphetamine/relative-time-format) for it.

### Example with `useIntl` hook

This package provides a `useIntl` hook, which might be helpful in some use cases:

```jsx
import React from 'react';
import { useIntl } from 'intlized-components';

export default function() {
  const intl = useIntl();

  if (intl.locale === 'en') {
    return <span>This text is only visible if locale is set to English.</span>;
  } else {
    return null;
  }
}
```

## Docs

### `createDict`

```javascript
type CreateDict = (scope: string, messages: { [string]: string }) => Messages;

type Messages = (key: string, variables?: Object) => Intlized$Message;
```

### `useIntl`

```javascript
type useIntl = () => {
  locale: string,
  changeLocale(locale: string, messages: Object): void,
  addMessages(messages: Object): void,
  trans(...Intlized$Message): string,
  dateTime(value: string | Date): string,
  number(value: number): string,
  timeAgo(value: string | Date): string,
};
```

### `intlized`

```javascript
type Intlized = (
  Component: React$ElementType,
  intlizedProps: Array<string>,
) => Intlized$Component;
```

### `<Trans>`

```javascript
type Intlized$Trans = React$ComponentType<{ ...Intlized$Message }>;
```

### `<DateTime>`

```javascript
type Intlized$DateTime = React$ComponentType<{ value: string }>;
```

### `<TimeAgo>`

```javascript
type Intlized$TimeAgo = React$ComponentType<{ value: string }>;
```

### `<Number>`

```javascript
type Intlized$Number = React$ComponentType<{ value: string }>;
```

## Misc

### Babel plugin

There is a babel plugin called [`babel-plugin-intlized-components`](https://github.com/ProAI/babel-plugin-intlized-components) that helps you to extract all defined messages from the component files and to easily create translation definition files.

## License

This package is released under the [MIT License](LICENSE).
