# Intlized Components

This package provides an easy way for internationalization support in React.js apps.

## Motivation

There are some i18n packages out there for react and in my opinion [`react-intl`](https://github.com/yahoo/react-intl) is the best one. The [`intl-messageformat`](https://github.com/yahoo/intl-messageformat) and [`intl-relativeformat`](https://github.com/yahoo/intl-relativeformat), which are part of `react-intl`, are great. That's why `intlized-components` use them, too. So you can define your messages the same way you would do it with `react-intl`. But then why write another i18n package? There are two things I thought we can do better:

1.  Write less boilerplate code.
2.  Define translations for a specific prop (e.g. placeholder prop on input components)

Have a look at the example below and decide yourself if this library did solve these problems. :)

## Installation

```shell
npm install intlized-components
# or
yarn add intlized-components
```

## Setup

This package is based on [`redux`](https://github.com/reactjs/redux), so we need to define an initial state and add the reducer:

```javascript
import { IntlClient } from "intlized-components";

// Create IntlClient instance
const intl = new IntlClient({
  defaultLocale: "en",
  locale: "en",
  locales: ["en", "fr", "de", "cn"],
  messages: fetchMessages("en")
});

...

// Add redux reducer
combineReducers({
  intl: intl.reducer(),
  ...
});
```

## Examples

### Translation Example

The most convient way to use intlized components is to extend the dictionary for every component, define intlized components and use the predefined `<Trans>` component. Basically with intlized components you can use any component as intlized component, just import the `intlized` function and wrap the component. But in most cases you need nothing more than the `<Trans>` component.

```jsx
import React from "react";
import { extendDictionary, intlized, Trans } from "intlized-components";

// Extend dictionary: Define a scope, then define the messages with the default translation
const t = extendDictionary("RegistrationForm", {
  welcome: "Welcome {name}",
  inputPlaceholder: "Your name...",
  imageAlt: "This image was created on {date}"
});

// wrap components, intlize attributes
const IntlizedInput = intlized("input", ["placeholder"]);
const IntlizedImage = intlized("img", ["alt"]);

// use defined messages
export default function() {
  return (
    <div>
      {/* Basic translation with variable */}
      <Trans {...t("welcome", { name: "dude" })} />

      {/* Intlized attribute placeholder */}
      <IntlizedInput placeholder={t("inputPlaceholder")} />

      {/* Intlized attribute with date formatting util */}
      <IntlizedImage
        alt={({ dateTime }) => t("imageAlt", { date: dateTime("2017-07-07") })}
      />
    </div>
  );
}
```

### Formatting Example

Furthermore you can format dates and numbers without intlized components:

```jsx
import React from "react";
import { DateTime, TimeAgo, Number } from "intlized-components";

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

## Docs

### `extendDictionary`

```javascript
type ExtendDictionary = (
  scope: string,
  messages: { [string]: string }
) => Messages;

type Messages = (key: string, variables?: Object) => Intlized$Message;
```

### `intlized`

```javascript
type Intlized = (
  Component: React$ElementType,
  intlizedProps: Array<string>
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

_TODO: There need to be more documentation on how to use the babel plugin_

### Intl polyfills

```javascript
// Polyfill Intl in Node.js
import polyfillIntl from "intlized-components/lib/polyfills/node";

polyfillIntl(["en", "fr", "de", "cn"]);
```

### Locale import for `intl-messageformat` and `intl-relativeformat`

```
// Locale import in browser
import 'intlized-components/lib/locales/de';
```

## License

This package is released under the [MIT License](LICENSE).
