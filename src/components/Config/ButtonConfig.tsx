
interface ButtonConfigProps {
    children: React.ReactNode;
    props?: Omit<React.HTMLAttributes<HTMLButtonElement>, 'className'>;
}

export default function ConfigButton({ children, props }: ButtonConfigProps) {

    return (

        <button className="dark:bg-blue-900 bg-blue-600 hover:bg-blue-700 dark:text-white text-gray-900 font-bold py-1 px-2 rounded-xl my-4 cursor-pointer" {...props}>
            {children}
        </button>
    );
};