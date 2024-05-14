import { Avatar, Divider, Group, Stack, Text } from '@mantine/core';
import useAvatarGradient from '@sinups/agg';

import classes from './styles.module.css';

function Demo() {
  //   const AvatarGradient = useAvatarGradient('2222');
  return (
    <div className={classes.root}>
      <Divider size="md" label="Available options" labelPosition="center" />
      <Stack h={300} align="center" justify="center" gap="lg" px={'40px'}>
        <Group>
          {['1', '2', '3', '4', '5', '6', '7'].map((variant) => (
            <Avatar
              key={variant}
              color={'#fff'}
              size={'xl'}
              style={{
                cursor: 'pointer',
                background: `${useAvatarGradient(variant)}`,
                color: '#fff',
              }}
            >
              AK
            </Avatar>
          ))}
        </Group>
      </Stack>
      {/* <div className="demo">
        <code>{AvatarGradient}</code>
        <div
          style={{
            background: AvatarGradient,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
          }}
        ></div>
      </div> */}
    </div>
  );
}

export default Demo;
