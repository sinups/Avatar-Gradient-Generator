> Avatar Gradient Generator
### Demo

https://sinups.github.io/Avatar-Gradient-Generator

## Установка

```
$ npm i @sinups/agg
```

## Использование

```js
import useAvatarGradient from '@sinups/agg';
const AvatarGradient = useAvatarGradient(user?.Id?.toString() ?? '');
style={{
    background: `${AvatarGradient}`,
 }}
```
### Параметр функции

#### string

- Тип: `string`
- Обязателен: Да

Желательно использовать ID пользователя

### TS
agg.d.ts
declare module '@sinups/agg';

