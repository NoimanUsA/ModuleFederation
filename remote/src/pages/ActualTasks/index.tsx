import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Button } from "@/components/Button";
import { TaskList } from "@/components/TaskList";

// Methods
import taskActions from "@/store/tasks/actions";

// Layout
import { MainLayout } from "@/layout/MainLayout/MainLayout";

// Styles
import './ActualTasks.scss'


export const ActualTasks = () => {
  const dispatch = useDispatch();
  const { activeTasks: tasks } = useSelector(state => state.tasks);

  const input = useRef<HTMLInputElement>(null);

  const addNewTask = () => {
    if (!input.current?.value) return;
    dispatch(taskActions.add({
      text: input.current?.value,
      id: Math.random() * 10,
    }))
  }

  const completeTask = (id: number) => {
    dispatch(taskActions.complete({ id }))
  };

  return (
    <MainLayout className="actual-tasks">
      <TaskList tasks={tasks} taskHandler={completeTask} />
      <div className="actual-tasks__handlers">
        <input type="text" ref={input} className="actual-tasks__new-task" />
        <Button onClick={addNewTask} className="actual-tasks__add-task">Добавить задачу</Button>
      </div>
    </MainLayout>
  );
};
