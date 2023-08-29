import { useState } from "react"
import { Button } from "@mui/material"
import CreditCardForm from "./credit-card-form"
import { CreditCard } from "@mui/icons-material"
import React from "react"

interface CreditCardButtonProps {
  onClick: () => void
}

const CreditCardButton: React.FC<CreditCardButtonProps> = ({ onClick }) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);

    if (onClick) {
        onClick()
    }
  };
  return (
    <React.Fragment>
      <Button
        variant={showForm ? "outlined" : "contained"}
        color="primary"
        startIcon={<CreditCard />}
        onClick={handleButtonClick}
        disabled={showForm}
        sx={{
          mb: 3,
          width: "100%",
          height: "52px",
          boxShadow: "none",
          fontSize: "16px",
        }}
      >
        Credit card
      </Button>

      {showForm && <CreditCardForm />}
    </React.Fragment>
  );
};

export default CreditCardButton;
