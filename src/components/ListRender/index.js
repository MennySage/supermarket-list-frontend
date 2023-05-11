import { ListCard } from "../listCard";
import "./index.css";

export const ListRender = ({ List }) => {
  if (List?.length === 0) {
    return <h3>Sua lista está vazia...</h3>;
  }

  return (
    <div className="list-render-container">
      {List.map((item) => (
        <ListCard item={item} key={item?._id} />
      ))}
    </div>
  );
};
