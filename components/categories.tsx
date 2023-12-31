import { FC } from "react";

interface CategoriesProps {
  header: string;
}

const Categories: FC<CategoriesProps> = ({ header }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <h3 className="font-bold">{header}</h3>
        <ul className="flex text-xs gap-2">
          <li className="transition hover:text-emerald-500 cursor-pointer">
            الكل
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            الخضراوات
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            الفواكه
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            الشاي والقهوه
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            اللحوم
          </li>
        </ul>
      </div>
    </>
  );
};

export default Categories;
