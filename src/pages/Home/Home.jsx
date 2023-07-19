import { Header } from "../../components/Header/Header";
import { DivHome } from "./style";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider/TechProvider";
import { TechCard } from "../../components/TechCard/TechCard";
import { ModalForm } from "../../components/Modal/Modal";

export const HomePage = () => {
  const { user, modal, setModal } = useContext(TechContext);

  const modalInfo = (value) => {
    if (!modal) {
      setModal(value);
    } else {
      setModal(false);
    }
  };
  return (
    <DivHome>
      <Header />
      <section className="div-name-profile">
        <h1 className="profile-name">Olá, {user?.name}</h1>
        <p className="profile-description">{user?.course_module}</p>
      </section>
      <main className="main-content">
        <div className="div-title-tech">
          <h1 className="title-tech">Tecnologias</h1>
          <button
            type="submit"
            onClick={() => modalInfo(true)}
            className="btn-tech-add"
          >
            +
          </button>
        </div>
        {modal === true ? <ModalForm /> : ""}
        <ul className="ul-tech">
          <TechCard></TechCard>
        </ul>
      </main>
    </DivHome>
  );
};
