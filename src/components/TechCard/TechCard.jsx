import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider/TechProvider";
import { Li } from "./style";
import { ModalEditForm } from "../Modal/EditModal/EditModal";
import { ToastContainer } from "react-toastify";
import deletes from "../../assets/delete.png";

export const TechCard = () => {
  const { user, deleteItem, modalEdit, setModalEdit, setModalPlaceholder } =
    useContext(TechContext);

  const userTechs = user.techs;

  const openEditModal = (value) => {
    setModalPlaceholder(value);
    modalEdit === true ? setModalEdit(false) : setModalEdit(true);
  };

  return (
    <>
      <ToastContainer />
      {modalEdit === true ? <ModalEditForm /> : ""}
      {userTechs?.map((data) => (
        <Li
          key={data.id}
          className="li-tech"
          onClick={() => openEditModal(data)}
        >
          <h2 className="tech">{data.title}</h2>
          <div className="div-level">
            <p className="text-level">{data.status}</p>
          </div>
        </Li>
      ))}
    </>
  );
};
