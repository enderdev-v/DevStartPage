import { UrlDomain } from "../../constants/constants";


export default function Shortcut({ name, url, Onclick }: { name: string, url: string, Onclick: () => any }) {
    const domain = new URL(url).origin;
    const iconUrl = `${UrlDomain}${domain}`;
    return (
        <div className="dark:bg-gray-800 bg-gray-500 h-28 w-24 rounded-lg relative">
                <button className="absolute top-0 right-0  hover:outline-1 hover:outline-white text-white font-bold py-1 px-2 rounded cursor-pointer"
                onClick={Onclick} title="Delete Shortcut">
                    <i className='bx bx-trash'></i>
                </button>
            <a className="h-full flex flex-col items-center justify-center" href={url} target="_blank" rel="noopener noreferrer" title={name}>
                <img src={iconUrl} alt={name} width={48} height={48} className="m-2 mt-0 rounded-lg" />
                <span className="mt-1 font-bold">{name}</span>
            </a>
        </div>
    );
};
