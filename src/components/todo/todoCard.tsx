const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div>
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
