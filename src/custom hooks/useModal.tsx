import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../redux/slices/modalSlice";
import { RootState } from "../redux/store";

const useModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { isModalOpen, handleOpenModal, handleCloseModal };
};

export default useModal;
