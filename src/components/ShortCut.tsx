

export default function Shortcut({ name, url }: { name: string, url: string }) {
    const domain = new URL(url).origin;
    const iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    return (
        <a className="dark:bg-gray-800  h-28 w-24" href={url}>
            <div className="h-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">...</button>
            <img src={iconUrl} alt={name} width={32} height={32} className="m-2"/>
            <span rel="noopener noreferrer">{name}</span>
            </div>
        </a>
    );
};
