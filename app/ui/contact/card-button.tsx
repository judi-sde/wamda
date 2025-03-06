import Link from "next/link";

export default function CardButton({ title, description, href, icon }: { title: string, description: string, href: string, icon: React.ReactNode }) {

  return (
    <Link href={href} className="min-h-[150px] flex-1 p-4 flex flex-col md:flex-row gap-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-lg:dark:hover:bg-gray-800  max-lg:dark:hover:border-blue-300">
      <div className="flex justify-center rounded-t-lg md:rounded-none md:rounded-s-lg">
        {icon}
      </div>
      <div className="leading-normal text-center md:text-left rtl:md:text-right">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 tracking-tight text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  )
}