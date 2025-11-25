import React, { useState } from "react";
import "./ShowTask.css";
import Confirm from "./Confirm";
const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // open modal
  const openModal = (action, id) => {
    setModalAction(action);
    setSelectedId(id);
    setModalOpen(true);
  };

  // confirm action
  const handleConfirm = () => {
    if (modalAction === "delete") {
      setTaskList(taskList.filter((todo) => todo.id !== selectedId));
    }

    if (modalAction === "edit") {
      const selectedTask = taskList.find((todo) => todo.id === selectedId);
      setTask(selectedTask);
    }

    setModalOpen(false);
  };

  // cancel action
  const handleCancel = () => setModalOpen(false);

  return (
    <section className="showTask">
     
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => openModal("edit", todo.id)
                
              }
              className="bi bi-pencil-square"
            ></i>

            <i
              onClick={() => openModal("delete", todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>

      {/* ConfirmModal */}
      {
        modalOpen &&
         <Confirm
        //open={modalOpen}
        title={modalAction === "delete" ? "Delete Task" : "Edit Task"}
        message={
          modalAction === "delete"
            ? "Are you sure you want to delete this task?"
            : "Do you want to edit this task?"
        }
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

      }
     
    </section>
  );
};

export default ShowTask;
