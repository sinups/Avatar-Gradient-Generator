> Avatar Gradient Generator

## Install

```
$ npm i @sinups/agg
import useAvatarGradient from '@sinups/agg';
```

## Usage

```js
 const { generateCSSGradient } = useAvatarGradient();
 const AvatarGradient = generateCSSGradient(user?.Id?.toString() ?? '');
 style={{
    background: `${AvatarGradient}`,
 }}
```
### Fn Param 

#### string

Type: `string`<br/>
Required

