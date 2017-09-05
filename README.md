# Intlized components

This package provides an easy way for internationalization support in React.js apps.

### Initialization

##### 1) Create `IntlClient` instance

```
import { IntlClient } from 'intlized-components';

const intl = new IntlClient({
  defaultLocale: 'en',
  locale: 'en',
  locales: ['en', 'de'],
  messages: fetchMessages('en'),
});
```

##### 2) Add Redux reducer

```
combineReducers({
  intl: intl.reducer(),
  ...
});
```

### Translations

##### `T` component

```
import { T } from 'intlized-components';

export default function() {
  return <T transKey="App.HomePage.welcome" />
}
```

##### Custom `T` component

```
import { intlized } from 'intlized-components';

const T = intlized('span', { scope: 'App.HomePage' })

export default function() {
  return <T transKey="welcome" />
}
```

##### Wrap `img` with `TImg` component

```
import { intlized } from 'intlized-components';

const TImg = intlized('img', { scope: 'App.HomePage', intlizedProps: { alt: 'altTransKey' } })

export default function() {
  return <TImg altTransKey="avatar" />
}
```

### Formatting

##### `DateTime` component

```
import { DateTime } from 'intlized-components';

export default function() {
  return <DateTime value="2017-07-07" />
}
```

##### `TimeAgo` component

```
import { TimeAgo } from 'intlized-components';

export default function() {
  return <TimeAgo value="2017-07-07" />
}
```

##### `Number` component

```
import { Number } from 'intlized-components';

export default function() {
  return <Number value={1000} />
}
```

### Intl polyfills

##### Polyfill Intl in Node.js

```
import polyfillIntl from 'intlized-components/lib/polyfills/node';

polyfillIntl(['en', 'de']);
```

### Locale import for `yahoo/messageformat` and `yahoo/relativeformat`

##### Locale import in browser

```
import 'intlized-components/lib/locales/de';
```
