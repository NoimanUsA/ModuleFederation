import { MainLayout } from "@/layout/MainLayout/MainLayout";
import React from "react";

// Components
import { TaskList } from '@/components/TaskList';

// Methods
import { useDispatch, useSelector } from "react-redux";

// Styles
import './CompletedTasks.scss'

export const CompletedTasks = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth);
  const tasks = useSelector(state => state.tasks.completedTasks[`${userId}`])


  return (
    <MainLayout className="completed-tasks">
      <TaskList tasks={tasks} />
    </MainLayout>
  );
};
