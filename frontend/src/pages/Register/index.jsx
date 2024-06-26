// config
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// styled components
import { FormContent, FormContainer, TextArea, SubmitBox } from "./styles";

// icons
import { IoCloseCircleOutline as CloseIcon } from "react-icons/io5";

//components

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function addProperty(dataProperty) {
    try {
      const response = await axios.post(
        "http://localhost:3001/properties",
        dataProperty
      );
      console.log(response.data);
    } catch (err) {
      console.error("Unable to add property", err);
    }
  }

  function submitConsole(data) {
    const modal = document.querySelector("dialog");
    modal.showModal();

    addProperty(data);
  }
  const closeModal = () => {
    const modal = document.querySelector("dialog");
    modal.close();
  };

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit(submitConsole)}>
        <div>
          <h3>Cadastrar propriedade</h3>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Nome da propriedade*"
            {...register("name", { required: "true" })}
          />
          {errors.name && (
            <span className="err">O campo nome é obrigatório</span>
          )}

          <input
            type="text"
            placeholder="Bairro*"
            {...register("neighbourhood", { required: "true" })}
          />
          {errors.neighbourhood && (
            <span className="err">O campo Bairro é obrigatório</span>
          )}

          <input
            type="text"
            placeholder="Cidade*"
            {...register("city", { required: "true" })}
          />
          {errors.city && (
            <span className="err">O campo Cidade é obrigatório</span>
          )}

          <input
            type="text"
            placeholder="URL da Imagem"
            {...register("imageUrl")}
          />

          <input
            type="number"
            placeholder="Preço*"
            {...register("price", { required: "true" })}
          />
          {errors.price && (
            <span className="err">O campo Preço é obrigatório</span>
          )}

          <TextArea
            placeholder="Descrição*"
            {...register("description", { required: "true" })}
          />
          {errors.description && (
            <span className="err">O campo Descrição é obrigatório!</span>
          )}
        </div>
        <SubmitBox>
          <button type="submit">Cadastrar</button>
          <Link to={"/"}>
            <span>voltar para a página inicial</span>
          </Link>
        </SubmitBox>
      </FormContent>
      <dialog id="dialog">
        <h2>Propriedade cadastrada com sucesso! 🚀</h2>
        <div className="x" onClick={closeModal}>
          <CloseIcon style={{ fontSize: "27px" }} />
        </div>
        <Link to={"/"}>
          <span>voltar para a página inicial</span>
        </Link>
      </dialog>
    </FormContainer>
  );
}
