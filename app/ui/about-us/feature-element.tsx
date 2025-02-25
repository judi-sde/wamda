import { featuresIcons } from "@/app/ui/about-us/icons";

export default function ListElement({ title, description, idx }: { title: string, description: string, idx: number }) {
  return (
    <li className="flex-1 flex flex-col lg:flex-row max-sm:flex-row items-center lg:items-start max-sm:items-start mb-4 gap-4">
      <div className="flex justify-center items-center w-10 h-10 max-sm:px-3 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
        {featuresIcons[idx]}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </li>
  )
}