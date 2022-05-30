import { MainLayout } from "@/layout/MainLayout/MainLayout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { TaskList } from '@/components/TaskList';

// Methods
import taskActions from "@/store/tasks/actions";


// Styles
import './CompletedTasks.scss'

export const CompletedTasks = () => {
  const dispatch = useDispatch();
  const { completedTasks: tasks } = useSelector(state => state.tasks);


  function deleteTask(id: number) {
    dispatch(taskActions.delete({ id }))
  }

  return (
    <MainLayout className="completed-tasks">
      <TaskList tasks={tasks} taskHandler={deleteTask} />
    </MainLayout>
  );
};
