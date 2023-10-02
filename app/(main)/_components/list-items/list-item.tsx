import Image from "next/image";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface ListItemProps {
  header: string;
  listItems: [{ img: string; title: string }];
}

const ListItem: FC<ListItemProps> = ({ header, listItems }) => {
  return (
    <div>
      <h1 className="font-bold relative">
        {header}
        <span className="bg-emerald-500 w-20 h-[2px] absolute -bottom-1 right-0"></span>
      </h1>
      <ul className="my-5">
        {listItems.map((item, idx) => (
          <li key={idx} className="flex gap-3 py-3 items-center">
            <Image width={70} height={70} src={item.img} alt={item.title} />
            <div>
              <h4 className="text-sm font-bold">{item.title}</h4>
              <span className="mt-1 flex items-center gap-1">
                <AiFillStar className="text-yellow-500 w-3 h-3" /> 5
              </span>
              <div className="px-1 mt-1 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-emerald-500">$2</p>
                  <p className="text-xs text-gray-500 line-through">$3.99</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
