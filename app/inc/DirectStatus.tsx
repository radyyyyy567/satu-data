import { HomeIcon } from "@heroicons/react/20/solid"

interface SettingMenuProps{
  namePage: string;
}

const DirectStatus = ({namePage}: SettingMenuProps) => {
  return (
    <div className="bg-blue-500 bg-opacity-5 p-4 space-x-3 flex items-center">
        <div className="flex items-center text-blue-500">
            <HomeIcon className="w-4 h-4 mr-0.5"/>
            <a href="/">Home</a>
        </div>
        <div>/</div>
        <div className="text-gray-600">
            {namePage}
        </div>
    </div>
  )
}

export default DirectStatus