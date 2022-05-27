import React, { useRef } from "react";
import { useLocation, useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Button } from "@/components/Button";
import { TaskList } from "@/components/TaskList";

// Layout
import { MainLayout } from "@/layout/MainLayout/MainLayout";

// Styles
import './ActualTasks.scss'
import { addTask } from "@/store/tasks/actions";

export const ActualTasks = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth);
  const tasks = useSelector(state => state.tasks.activeTasks[`${userId}`])
  const input = useRef<HTMLInputElement>(null);

  const addNewTask = () => {
    if (!input.current?.value) return;

    dispatch(addTask({
      text: input.current?.value,
      id: Math.random() * 10,
      userId
    }))
  }

  return (
    <MainLayout className="actual-tasks">
      <TaskList tasks={tasks} />
      <div className="actual-tasks__handlers">
        <input type="text" ref={input} className="actual-tasks__new-task" />
        <Button onClick={addNewTask} className="actual-tasks__add-task">Добавить задачу</Button>
      </div>
    </MainLayout>
  );
};
