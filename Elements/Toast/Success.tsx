import toast from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";
import styled from "styled-components";

function SuccessToast(message: string, duration?: number) {
  return toast.success(
    message?.length > 0 ? message : "Sorry! something went wrong. code 420",
    {
      style: {
        backgroundColor: "var(--color-gray2)",
        color: "white",
      },
      duration: duration || 4000,
    }
  );
}
export default SuccessToast;
const StyledMdCheckCircle = styled(MdCheckCircle)`
  color: red;
`;
