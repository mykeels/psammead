# Contributing

## Documentation index
Please familiarise yourself with our:
- [Code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)
- [Code Standards and Ways of Working](https://github.com/bbc/psammead/blob/latest/Code-Standards-and-Ways-of-Working.md)
- [Contributing guidelines](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md) (you are here)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [Primary README](https://github.com/bbc/psammead/blob/latest/README.md)
- [Talos (package bumping bot)](https://github.com/bbc/psammead/blob/latest/scripts/talos/README.md)
- [Use/consumption of Psammead packages guidelines and package list](https://github.com/bbc/psammead/blob/latest/packages/README.md)

NB there is further documentation colocated with relevant packages and code. The above list is an index of the top-level documentation of our repo (and our sibling repo [Simorgh](https://github.com/bbc/simorgh)).

## Overview

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code. Contribution can include adding documentation, requesting clarification, making typo corrections and much more.

Psammead's "Definition of Done" is not only when a package is published but when all the Psammead packages that consume that package are updated. We use [Talos (package bumping bot)](https://github.com/bbc/psammead/blob/latest/scripts/talos/README.md) to automate much of this bumping process.


Fundamentally, Psammead components are intended to be:

Presentational (most of them, we do have other kinds of packages)
GEL-Compliant
Accessible


### What does that mean?

#### Presentational

When developing and using Psammead components, we try to maintain a very clear distinction between [presentational and container components, as they are described in this blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

In summary, Psammead components should be almost exclusively concerned with how the component appears, and should avoid fetching or mutating data. Instead, these data fetching and mutating operations are split out into "container" components that can be entirely separate, and which can provide any necessary data or behaviour to presentational components via props.

These principles help Psammead components to be reusable across fundamentally different projects and back-ends.

#### GEL-Compliant

GEL is the BBC's shared design language. All Psammead components should be built on the [GEL utility packages](../utilities/) defined in this repo, helping ensure they fit within GEL, and in turn provide a consistent user experience.

#### Accessible

Finally, Psammead components are built and tested against the [BBC News assistive technology guidelines](https://bbc.github.io/accessibility-news-and-you/). More information on building components to these guidelines can be found in the [project's contributing guide](../../CONTRIBUTING.md).

## Developing with Psammead

### Create a new package
It is autogenerated via:
```
npm run create:package
```

### Edit existing packages

1. Find a Psammead component you wish you to work on, in your project from the [directory of available packages](https://github.com/bbc/psammead/tree/latest/packages), or by running `npx lerna list` inside the repo.
2. To install the package in your local development, run:
   ```
   npm install @bbc/psammead-<component_name>
   ```
3. See the README for the respective the Psammead component, to see the required props, usage example and use-cases for it.

### Using multiple components locally

When making changes to a package locally if you want to pull those changes into another psammead package then the following command will create the required symlinks for you.

Run the following command to link all psammead packages up regardless of dependency version:

```
npm run install:packages --force-local
```

## The package publish, deprecation, and alpha publication process
<!-- TODO: Add this, also consider where to mention npm linking, either here or in the packages README -->
