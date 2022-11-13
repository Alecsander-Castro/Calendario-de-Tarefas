import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import styles from "./Index.module.scss";

const Index = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const url = "http://localhost:3000/tasks";

  const { httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      duration,
    };
    httpConfig(task, "POST");
    alert("Tarefa registrada com sucesso!");

    setTitle("");
    setDescription("");
    setDate("");
    setDuration("");
    setTitle("");
    setDescription("");
    setDate("");
    setDuration("");
  };

  return (
    <div>
      <h3>Registrar tarefa</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="task-title"
            placeholder="Título"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="description"
            id="task-description"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="datetime-local"
            name="date"
            id="task-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="number"
            name="duration"
            id="task-duration"
            placeholder="Duração da tarefa(horas)"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Index;
