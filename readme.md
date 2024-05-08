> Avatar Gradient Generator

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