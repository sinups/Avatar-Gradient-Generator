import { useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Code,
  ColorSwatch,
  Group,
  Modal,
  Select,
  Slider,
  Switch,
  TextInput,
} from '@mantine/core';

// Predefined gradients
const predefinedGradients = [
  { value: '#e36f74', label: 'Gradient 1' },
  { value: '#fca76f', label: 'Gradient 2' },
  { value: '#a693e9', label: 'Gradient 3' },
  { value: '#78ca5c', label: 'Gradient 4' },
  { value: '#6ac9cc', label: 'Gradient 5' },
  { value: '#50a2e9', label: 'Gradient 6' },
  { value: '#f078ae', label: 'Gradient 7' },
];

const defaultImageUrl =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

const AvatarDemo = () => {
  const [variant, setVariant] = useState('filled');
  const [size, setSize] = useState(128); // Mantine's "xl" size
  const [radius, setRadius] = useState(100); // Mantine's "xl" radius
  const [color, setColor] = useState('#228be6');
  const [src, setSrc] = useState('');
  const [useSrc, setUseSrc] = useState(false);
  const [codeModalOpened, setCodeModalOpened] = useState(false);

  const variants = ['filled', 'outline', 'gradient'];

  const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar variant="${variant}" size="${size}" radius="${radius}" color="${color}" src="${useSrc ? src || defaultImageUrl : ''}" />;
}
`;

  const avatarPreviewStyle = {
    height: 300,
    display: 'flex',
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
            variant={variant}
            size={size}
            radius={radius}
            color={color}
            src={useSrc ? src || defaultImageUrl : ''}
          >
            {!useSrc && 'A'}
          </Avatar>
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
            {predefinedGradients.map((gradient) => (
              <ColorSwatch
                key={gradient.value}
                color={gradient.value}
                onClick={() => setColor(gradient.value)}
                style={{ cursor: 'pointer' }}
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
