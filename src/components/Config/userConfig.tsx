export default function UserConfig({ onSubmit }: { onSubmit: (e: any) => void }) {
 

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <li className="w-full text-left p-1 rounded mt-1">
      <form className="flex flex-col m-3" onSubmit={(e) => onSubmit(e)}>
        <label className="text-lg">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Example: enderdev, Justevil, marcrock22"
          className="mb-2 p-2 rounded"
          required
          onClick={handleClick}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </li>
    );
}