import { Button } from "@mui/material";

interface FormButtonProps {
    onClick: () => void;
  }
  
  const FormButton: React.FC<FormButtonProps> = ({ onClick }) => {
    return <Button onClick={onClick}>Register</Button>;
  };
  
 export  default FormButton ;