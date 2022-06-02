import { MainLayout } from "@/layout/MainLayout/MainLayout";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/hooks/useTypedSelector";

// Components
import { TaskList } from '@/components/TaskList';

// Methods
import tasksActions from "@/store/actions/tasks";

// Styles
import './CompletedTasks.scss'

export const CompletedTasks = () => {
  const dispatch = useDispatch();
  const tasks = useTypedSelector(state => state.tasks.completedTasks);

  useEffect(() => {
    dispatch(tasksActions.fetchTasks())
  }, [])

  function deleteTask(id: number) {
    dispatch(tasksActions.deleteTask({ id }))
  }

  return (
    <MainLayout className="completed-tasks">
      <TaskList tasks={tasks} taskHandler={deleteTask} />
    </MainLayout>
  );
};
