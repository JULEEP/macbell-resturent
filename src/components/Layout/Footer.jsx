import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          All rights reserved by Macbell.
        </Text>
      </Container>
    </div>
  );
}
