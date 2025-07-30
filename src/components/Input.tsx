export default function Input() {
  return (
    <input type="text" className="border border-gray-300 p-2 rounded-3xl bg-gray-100 dark:bg-gray-900 w-xl h-12 dark:text-white text-gray-800" 
    placeholder="🔎   Search or type a URL"
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const query = encodeURIComponent((e.target as HTMLInputElement).value);
        window.open("https://google.com/search?q=" + query, "_blank");
      }
    }}
    />
  )
}
