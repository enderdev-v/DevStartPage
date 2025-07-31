export default function Modal({ state, onSubmit }: { state: boolean, onSubmit: any }) {
   const modalState = state ? "block" : "hidden";
    return (
        <div className={`inset-0 bg-gray-800 h-80 w-68 m-2 p-3 ${modalState}`} >
            <h3 className="text-2xl font-bold">Crear Acceso Directo</h3>
            <form
                className="flex flex-col m-3"
                onSubmit={onSubmit}>
                <label className="text-lg">Nombre:</label>
                <input type="text" name="name" placeholder="Example: Google" className="mb-2 p-2 rounded" required />
                <label className="text-lg">URL</label>
                <input type="text" name="url" placeholder="Example: https://google.com" className="mb-2 p-2 rounded" required />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Create</button>
            </form>
        </div>
    );
};
