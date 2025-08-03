import { UrlDomain } from "../../constants/constants";

export default function Link({ name, url }: { name: string, url: string }) {
    const domain = new URL(url).origin;
    const iconUrl = `${UrlDomain}${domain}`;
    return (
        <li className="w-full text-left p-1 rounded mt-1">
            <a href={url} rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={iconUrl} alt="" width={16} height={16} className="rounded-sm"/>
                {name}
            </a>
        </li>
    );
};
