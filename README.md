# react-loading-placeholder

[![npm package][npm-badge]][npm]

Inspired by Facebook Content Placeholder and this article: https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html. Can be used for both tables and lists. Demo GIF is compressed, the plugin looks much better in use.

![Demo GIF](https://user-images.githubusercontent.com/1689831/30972787-e1b93202-a46b-11e7-83a4-7af319c7fb07.gif)



## Installation

```bash
npm install --save react-loading-placeholder
```


## Including it:
```javascript
import LoadingPlaceholder from 'react-loading-placeholder'

<LoadingPlaceholder numberOfRows={10}></LoadingPlaceholder>
```

## Settings:

#### Set row height and space between:
```
<LoadingPlaceholder numberOfRows={10} heightOfRows={40} spaceBetween={10}></LoadingPlaceholder>
```

#### Table Layout:
```
<LoadingPlaceholder numberOfRows={10} tableLayout={true}></LoadingPlaceholder>
```

#### Set filter placeholder size:
```
<LoadingPlaceholder numberOfRows={10} tableLayout={true} filterOptions={{width: 300, height: 50}}></LoadingPlaceholder>
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-loading-placeholder
