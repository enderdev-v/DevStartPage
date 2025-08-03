



export default function WeatherConfig() {
      const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };
    return (
        <li className="w-full text-left p-1 rounded mt-1">
            <h6 className="font-bold">Weather Config</h6>
            <form
              className="flex flex-col m-3"
              >
              <label className="text-lg">Find Location</label>
              <input type="text" name="name" placeholder="Example: Paris, Madrid, Buenos Aires" className="mb-2 p-2 rounded" required onClick={handleInputClick}/> 
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-4">get from location</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Create</button>
            </form>
          </li>
    );
};
