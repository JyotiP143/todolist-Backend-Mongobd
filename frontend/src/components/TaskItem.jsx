function TaskItem({ task }) {
  // const handleDelete = async () => {

    // onDelete, refresh
  //   await onDelete(task._id);
  //   refresh();
  // };

  return (
   <div className="task">
  <span>{task.title}</span>
  <button title="Delete task">❌</button>
</div>
  );
}

export default TaskItem;