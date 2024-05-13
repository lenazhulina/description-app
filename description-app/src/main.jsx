import './index.css';
import { createRoot } from "react-dom/client";
import { TermList } from './TermList';

function saveTermsList(terms) {
  localStorage.setItem("termList", JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem("termList");

  if (!rawTermList) {
    return [];
  }

  return JSON.parse(rawTermList);
}

let terms = restoreTermList();

const descriptionList = document.getElementById("description-list");

const reactRoot = createRoot(descriptionList);

function syncTermList() {
  saveTermsList(terms);
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />)
}

function addTerm(title, description) {
  terms.push({
    id: Date.now(),
    title,
    description,
  });

  terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1));

  syncTermList();
}

function deleteItem(id) {
  terms = terms.filter((term) => term.id !== id);

  syncTermList();
}

syncTermList();

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  // Вызов функции обработчик события отправки формы
  addTerm(title, description);
});
