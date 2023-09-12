import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { number } from "prop-types";

import { useCounter } from "../../../hooks";
import { CardContent } from "./styles";

Counter.propTypes = {
  initialValue: number,
  step: number,
};

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, increment, decrement] = useCounter(initialValue, step);

  return (
    <Card sx={{ maxWidth: 200, margin: "1rem" }} elevation={5}>
      <CardContent>
        <Typography variant="h2" component="p">
          {counter}
        </Typography>
        <ButtonGroup variant="outlined">
          <Button onClick={decrement}>-{step}</Button>
          <Button onClick={increment}>+{step}</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
