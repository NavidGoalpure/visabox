import ModalComponent from "Components/ModalComponent";
import { Dispatch, SetStateAction } from "react";
import { EditModalContentKeys } from "./const";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  modalContentKeys: EditModalContentKeys | null;
}
const EditModal: React.FC<Props> = ({
  setIsModalOpen,
  isModalOpen,
  modalContentKeys,
}) => {
  function ContentBasedOnKeys() {
    switch (modalContentKeys) {
      case EditModalContentKeys.ACCREDITED_COMMUNITY_LANGUAGE:
        return <div>red</div>;

      default:
        return null;
    }
  }
  return (
    <ModalComponent
      doesModalCloseOnOutsideInteraction={true}
      DialogTitleText="Title motherfucker"
      setOpen={setIsModalOpen}
      open={isModalOpen}
    >
      {ContentBasedOnKeys()}
    </ModalComponent>
  );
};
export default EditModal;
