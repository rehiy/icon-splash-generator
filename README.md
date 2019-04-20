# Resource Generator

This tool will crop and resize PNG source images to generate images for modern iOS and Android devices.

`icon-splash-generator` must run at the root of a standard Cordova project setup, such as:

    resources/
    ├── icon.png
    └── splash.png

-   `resources/icon.png` must be at least 1024×1024px
-   `resources/splash.png` must be at least 2732×2732px

## Install

```bash
$ npm install -g icon-splash-generator
```

#### CommonJS Example

```js
const run = require('icon-splash-generator');

await run();
```

#### TypeScript Example

`run()` takes an options object described by the interface `Options`. If options are provided, resources are generated in an explicit, opt-in manner. In the following example, only Android icons and iOS splash screens are generated.

```ts
import { Options, run } from 'icon-splash-generator';

const options: Options = {
  directory: '/path/to/project',
  resourcesDirectory: 'resources',
  platforms: {
    android: { icon: { sources: ['resources/icon.png'] } },
    ios: { splash: { sources: ['resources/splash.png'] } },
  },
};

await run(options);
```
