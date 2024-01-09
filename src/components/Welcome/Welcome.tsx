import { Title, Text, Anchor, rem } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={45} mx={rem('16px')}>
        Salut, meu nome é {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Jessica Marques
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Estou ainda desenvolvendo este portfólio mas por enquanto pode dar uma olhada no meu
        <Anchor href="https://github.com/jessicaMarquess" size="lg" target="_blank" rel="noopener noreferrer">
          {' '}github pessoal
        </Anchor>
        . Espero que tenha uma experiência agradável 🖤.
      </Text>
    </>
  );
}
