import { Group } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import classes from './Home.module.css';

export function HomePage() {
  return (
    <Group className={classes.styleBody}>
      <ColorSchemeToggle />
      <Welcome />
    </Group>
  );
}
