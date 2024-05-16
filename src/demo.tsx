import { useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Code,
  Group,
  Modal,
  Select,
  Slider,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import useAvatarGradient from '@sinups/agg';

// Fixed strings for predefined gradients
const fixedStrings = ['1', '2', '3', '4', '5', '6', '7'];
const defaultImageUrl =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

// Custom component to display gradient swatches
const GradientSwatch = ({ gradient, onClick }) => (
  <Box
    onClick={onClick}
    style={{
      cursor: 'pointer',
      background: gradient,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid #ccc',
    }}
  />
);

const AvatarDemo = () => {
  const [variant, setVariant] = useState('filled');
  const [size, setSize] = useState(128); // Mantine's "xl" size
  const [radius, setRadius] = useState(100); // Mantine's "xl" radius
  const [color, setColor] = useState('#228be6');
  const [src, setSrc] = useState('');
  const [useSrc, setUseSrc] = useState(false);
  const [codeModalOpened, setCodeModalOpened] = useState(false);
  const [avatarId, setAvatarId] = useState('1');

  const variants = ['filled', 'outline', 'gradient'];

  const randomizeAvatarId = () => {
    const randomId = Math.floor(Math.random() * 150000) + 1;
    setAvatarId(randomId.toString());
    setColor(useAvatarGradient(randomId.toString()));
  };

  const code = `

import { Avatar } from '@mantine/core';
import useAvatarGradient from '@sinups/agg';

function Demo() {
  return <Avatar variant="filled" radius="sm" src=""  gradient={useAvatarGradient(userId)} > AK </Avatar>;
}

`;

  const avatarPreviewStyle = {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) calc(0.625rem), rgba(0, 0, 0, 0.03) calc(0.625rem), rgba(0, 0, 0, 0.03) 12px), repeating-linear-gradient(135deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) calc(0.625rem), rgba(0, 0, 0, 0.03) calc(0.625rem), rgba(0, 0, 0, 0.03) calc(0.75rem))`,
    '--stripe-color': '#ddd',
    border: '1px solid #ccc',
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box p="md" style={{ width: 800 }}>
        <Box style={avatarPreviewStyle}>
          <Avatar
            src={useSrc ? src || defaultImageUrl : ''}
            // variant={variant}
            size={size}
            color={'#fff'}
            radius={radius}
            style={{
              cursor: 'pointer',
              background: `${useAvatarGradient(avatarId)}`,
              color: '#fff',
            }}
          >
            {!useSrc && 'AK'}
          </Avatar>
          <Text mt="sm">
            ID: {avatarId}
            BG: <code>{useAvatarGradient(avatarId)}</code>
          </Text>
        </Box>

        <Box mt="md">
          <Button onClick={randomizeAvatarId}>Randomize Avatar</Button>
        </Box>

        <Box mt="md">
          <Select
            label="Variant"
            value={variant}
            onChange={(value) => setVariant(value)}
            data={variants}
          />
        </Box>

        <Box mt="md">
          <Slider
            label="Radius"
            value={radius}
            onChange={setRadius}
            min={0}
            max={100}
            step={1}
          />
        </Box>

        <Box mt="md">
          <Slider
            label="Size"
            value={size}
            onChange={setSize}
            min={16}
            max={128}
            step={1}
          />
        </Box>

        <Box mt="md">
          <label>Color</label>
          <Group spacing="xs">
            {fixedStrings.map((str) => (
              <GradientSwatch
                key={str}
                gradient={useAvatarGradient(str)}
                onClick={() => setColor(useAvatarGradient(str))}
              />
            ))}
          </Group>
        </Box>

        <Box mt="md">
          <Switch
            label="Use image URL"
            checked={useSrc}
            onChange={(event) => setUseSrc(event.currentTarget.checked)}
          />
        </Box>

        {useSrc && (
          <Box mt="md">
            <TextInput
              label="Image URL"
              placeholder="Enter image URL"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
            />
          </Box>
        )}

        <Box mt="md">
          <Button onClick={() => setCodeModalOpened(true)}>Show Code</Button>
        </Box>

        <Modal
          opened={codeModalOpened}
          size={'xl'}
          onClose={() => setCodeModalOpened(false)}
          title="Component Source Code"
        >
          <Code block>{code}</Code>
        </Modal>
      </Box>
    </Box>
  );
};

export default AvatarDemo;
