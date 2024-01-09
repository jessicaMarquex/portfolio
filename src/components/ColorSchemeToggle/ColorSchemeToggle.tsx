import { Switch, useMantineColorScheme, useMantineTheme, rem, Group } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  const [checked, setChecked] = useState(false);

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
      cursor="pointer"
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
      cursor="pointer"
    />
  );

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    toggleColorScheme();
  };

  return (
    <Group className={classes.container} justify="end">
      <Switch
        size="md"
        color="dark.4"
        onLabel={sunIcon}
        offLabel={moonIcon}
        onChange={(event) => handleChecked(event)}
        checked={checked}
      />
    </Group>
  );
}
