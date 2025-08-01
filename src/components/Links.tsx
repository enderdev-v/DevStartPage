import { UrlDomain } from "../constants/constants";

export default function Links({ name, url }: { name: string, url: string }) {
    const domain = new URL("https://seyfert.dev").origin;
    const iconUrl = `${UrlDomain}${domain}`;
    return (
        <li className="w-full text-left p-1 rounded">
            <a href="https://seyfert.dev/" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={iconUrl} alt="" width={16} height={16} />
                Seyfert
            </a>
        </li>
    );
};
