import React from "react";
import './TaskList.scss'

// Components
import { Task } from "@/components/Task";

import { ITask } from "@/components/types";

interface IProps {
  tasks: ITask[]
}

export const TaskList: React.FC<IProps> = (props) => {
  function renderTasks(tasks: ITask[]) {
    return tasks.map((task: ITask) => {
      return (
        <Task task={task} />
      )
    })
  };

  return (
    <div className={props.tasks ? 'task-list' : 'task-list task-list--empty'}>
      <div className="task-list__inner">
        {
          props.tasks ?
            renderTasks(props.tasks) :
            <div className="task-list__empty">Нет задач</div>
        }
      </div>
    </div>
  )
}