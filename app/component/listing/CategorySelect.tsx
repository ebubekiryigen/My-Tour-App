import { IconType } from "react-icons";

type CategorySelectProps = {
    name: string;
    slug: string;
    icon: IconType;
    selected: boolean;
    onClick: (name: string, slug: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
    name,
    slug,
    icon: Icon,
    selected,
    onClick
}) => {
    return (
        <div className={`${selected ? "text-black" : "text-gray-500"} cursor-pointer flex flex-col items-center`} onClick={() => onClick(name, slug)}>
            <Icon size={25}/>
            <div className="text-lg tracking-wider">{name}</div>
        </div>
    );
}

export default CategorySelect;
