import React from "react";

// Components
import { Button } from "@/components/Button";
import { TaskList } from "@/components/TaskList";

//Layout
import { MainLayout } from "@/layout/MainLayout/MainLayout";

const tasks = [
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
  {
    date_start: "22.04.2012",
    date_end: null,
    description: "Do something",
  },
];

export const ActualTasks = () => {
  return (
    <MainLayout>
      <TaskList tasks={tasks} />
      <Button>Добавить задачу</Button>
    </MainLayout>
  );
};
