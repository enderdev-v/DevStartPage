

export default function Shortcut({ name, url }: { name: string, url: string }) {
    const domain = new URL(url).origin;
    const iconUrl = `https://favicon.is/${domain}`;
    return (
        <div className="bg-gray-800 p-2 rounded mt-2">
            <img src={iconUrl} alt={name} width={32} height={32} />
            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    );
};
