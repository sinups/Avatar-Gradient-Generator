// import { Avatar, Divider, Group, Stack } from '@mantine/core';
// import useAvatarGradient from '@sinups/agg';

import configurator from './components/Randomizer/Configurator';
import { renderDemo } from './render-demo';

import classes from './styles.module.css';

const ConfiguratorDemo = renderDemo(configurator);

function Demo() {
  return (
    <div className={classes.root}>
      {/* <Divider size="md" label="Available options" labelPosition="center" />
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
      </Stack> */}
      <ConfiguratorDemo />
    </div>
  );
}

export default Demo;
