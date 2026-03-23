import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, refresh }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={onDelete}
            refresh={refresh}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;