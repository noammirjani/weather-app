import { Container } from "react-bootstrap";
import "../../styles/MessageDisplay.css";

function MessageDisplay({ children, variant, className }) {
  const color = variant === "error" ? "7d7d7d" : "f5f5f5";
  return (
    <Container style={{ backgroundColor: color }} className={"message"}>
      {children}
    </Container>
  );
}

export default MessageDisplay;
