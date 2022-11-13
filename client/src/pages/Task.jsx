import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Task.module.scss";

const Task = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const { id } = useParams();

  const url = "http://localhost:3000/tasks/" + id;
  const { data: tasks, httpConfig, loading, error } = useFetch(url);

  const handleEdit = async () => {
    const task = {
      title,
      description,
      date,
      duration,
    };

    httpConfig(task, "PATCH");
    alert("Tarefa atualizada com sucesso!");
  };

  return (
    <>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {tasks && (
        <div className={styles.edit}>
          <h3>Editar Tarefa</h3>
          <input
            type="text"
            name=""
            id=""
            placeholder="Título da tarefa"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Descrição da tarefa"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="datetime-local"
            name=""
            id=""
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Duração da tarefa em horas"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          <input
            type="button"
            value="Enviar"
            onClick={() => handleEdit(tasks._id)}
          />
          <Link to={"/tasks"}>Voltar</Link>
        </div>
      )}
    </>
  );
};

export default Task;
