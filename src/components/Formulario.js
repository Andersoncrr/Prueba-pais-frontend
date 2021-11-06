import React, { useState } from "react";
import { save } from "../https/saveData";
import Swal from "sweetalert2";
import { useForm } from "../useForm/useForm";
import { Dropdown } from "./Dropdown";
import "./Formulario.css";

export const Formulario = () => {
  const [formValues, handleInputChange, reset] = useForm({ fullName: "" });
  const [country, setCountry] = useState("");
  const [uri, setUri] = useState("");
  const data = {
    fullname: String,
    country: String,
  };
  const { fullName } = formValues;
  const onchange = (value) => {
    setCountry(value);
    setUri(value.flag);
  };

  const resetContry = () => {
    setCountry("");
    setUri("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    reset();
    resetContry();
    if (fullName.trim().length <= 3 && fullName.trim().length >= 1) {
      Swal.fire("Error", "Digite un nombre valido", "error");
    } else {
      try {
        data.fullname = e.target[0].value;
        data.country = country.value;
        const saveData = await save(data);
        if (saveData) {
          Swal.fire({
            icon: "success",
            title: "Agregado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        resetContry();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center content 100vh"
      style={{
        backgroundImage: `url(${uri})`,
      }}
    >
      <div className="card">
        <div className="card-header">
          <h3>País</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input
                type="text"
                placeholder="Digite su nombre completo"
                className="form-control"
                name="fullName"
                autoComplete="off"
                value={fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <Dropdown defaultValue={country} onchangeSelect={onchange} />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Agregar"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
