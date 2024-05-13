import { TermCard } from "./TermCard";
import "./TermList.css";

//  статичный список массива
// const terms = [
//   {
//     title: "React",
//     description: "Библиотека для создания пользовательских интерфейсов",
//   },
//   {
//     title: "React-компонент",
//     description: "Функция, возвращающая React элемент",
//   },
//   {
//     title: "Render",
//   },
// ];

export const TermList = ({ terms, onDelete }) => {
  return (
    <ul className="term-list">
      {terms.map((item) => (
      <li className="term-list__item"
        key={item.id}
      >
      <TermCard
      title={item.title}
      description={item.description}
      onDelete={onDelete}
      id={item.id}
      />
    </li>
      ))}
    </ul>
  );
};
