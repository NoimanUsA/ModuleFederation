import React from "react";
import './Task.scss'
import { ITask } from "@/components/types";

interface IProps {
  task: ITask;
}

export const Task: React.FC<IProps> = (props) => {
  const { task } = props;

  return (
    <div className="task">
      <div className="task__title">
        {task.description}
      </div>
      <div className="task__date-start">
        {task["date_start"]}
      </div>
      {task["date_end"] || <div className="task__date-end">{task["date_end"]}
      </div>}
    </div>
  )
}