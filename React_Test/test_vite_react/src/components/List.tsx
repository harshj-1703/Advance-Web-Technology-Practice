import { useState } from "react";

interface Props {
  cityList: string[];
  title: string;
}

const List = ({ cityList, title }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const items = cityList;

  return (
    <>
      <div className="list-group">
        <div>{title}</div>
        <ul className="list-group">
          {items.map((items, index) => (
            <li
              key={items}
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                console.log({ items, index });
                setSelectedIndex(index);
              }}
            >
              {items}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
