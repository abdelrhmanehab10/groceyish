import { FC } from "react";
import ListItem from "./list-item";

interface ListItemsProps {}

const ListItems: FC<ListItemsProps> = ({}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <ListItem
        header="الأكثر بيعا"
        listItems={[{ img: "/lists/orange.png", title: "برتقال" }]}
      />
      <ListItem
        header="الأعلي تقييما"
        listItems={[{ img: "/lists/orange.png", title: "برتقال" }]}
      />
      <ListItem
        header="الأكثر شهره"
        listItems={[{ img: "/lists/orange.png", title: "برتقال" }]}
      />
      <ListItem
        header="المضافه مؤخرا"
        listItems={[{ img: "/lists/orange.png", title: "برتقال" }]}
      />
    </div>
  );
};

export default ListItems;
