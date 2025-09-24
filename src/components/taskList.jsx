function TaskList({ tasks }) {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-lg overflow-hidden">

      <div className="absolute top-0 right-0 h-full w-2 bg-pink-600 rounded-r-2xl"></div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Tasks</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            <input
              type="checkbox"
              defaultChecked={task.completed}
              className="w-5 h-5 text-green-500 rounded"
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
