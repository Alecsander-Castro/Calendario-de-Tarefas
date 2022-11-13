import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  const url = "http://localhost:3000/tasks";

  const { data: tasks, httpConfig, loading, error } = useFetch(url);

  const handleDelete = (_id) => {
    httpConfig(_id, "DELETE");
    alert("Tarefa exlcluída com sucesso!");
  };

  return (
    <div>
      <h3>Lista de Tarefas</h3>

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {tasks &&
            tasks.map((task, _id) => (
              <li className={styles.tasks} key={_id}>
                <h4>Tarefa: {task.title}</h4>
                <p>Descrição: {task.description}</p>
                <p>Data e Hora: {task.date}</p>
                <p>Duração: {task.duration} horas</p>
                <Link to={`/edit/${task._id}`}>Editar</Link>
                <button onClick={() => handleDelete(task._id)}>Deletar</button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
