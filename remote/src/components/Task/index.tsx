import React, { ReactNode } from "react";
import './Task.scss'

// Types
import { ITask } from '@/types/components';

interface IProps {
  task: ITask;
  children?: ReactNode;
  className?: string;
}

export const Task: React.FC<IProps> = ({ task, className, children }) => {
  return (
    <div className={`task ${className}`}>
      <div className="task__text">
        {task.text}
      </div>
      <div className="task__handlers">{children}</div>
    </div>
  )
}