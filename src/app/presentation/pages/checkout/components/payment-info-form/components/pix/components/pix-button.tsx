import { Button } from "@mui/material"

type Props = {
  onClick: () => void
}

const PixButton = ({ onClick }: Props) => {
  const handleButtonClick = () => {
    if (onClick) {
        onClick()
    }
  }
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleButtonClick}
      sx={{
        mt: 2,
        width: "100%",
        height: "52px",
        backgroundColor: "#4CB8A9",
        boxShadow: "none",
        fontSize: '16px'
      }}
    >
      Pix
    </Button>
  );
};

export default PixButton;
