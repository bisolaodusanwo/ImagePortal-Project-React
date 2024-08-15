import styled from "styled-components";

interface ButtonStyleProps {
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
  type?: "button" | "submit" |"reset";
}

const Wrapper = styled.button<ButtonStyleProps>`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg || "#403234"};
  width: ${(props) => props.width || "100%"};
  padding: 12px 24px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.borderColor ?? "none"}`};
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  type?: "button" | "submit" |"reset";
}

const Button = ({
  text,
  onClick,
  bg,
  color,
  width,
  borderColor,
  height,
  type,
}: ButtonProps) => {
  return (
    <Wrapper
      bg={bg}
      color={color}
      width={width}
      height={height}
      borderColor={borderColor}
      onClick={onClick}
      type={type}
    >
      {text}
    </Wrapper>
  );
};

export default Button;