import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

function SMButton(props) {
  const { label, onClick, loading, disabled} = props;
  return (
    <>
      <Button disabled={disabled||loading} onClick={onClick} variant="contained">
        {label} {loading && <CircularProgress/>}
      </Button>
    </>
  );
}
export default SMButton;
