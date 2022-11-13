import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://icon-library.com/images/calendar-icon-white-png/calendar-icon-white-png-18.jpg"
            alt="icone tarefas"
          />
          <p>Calendário de tarefas</p>
        </div>

        <div>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/tasks">Tarefas</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
