import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewTodoModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

interface AddNewTodoModalProps {
  categories: object[];
  receiveDataItem: (itemTodo: object) => void;
  onChangeShow: () => void;
};

const AddNewTodoModal: React.FC<AddNewTodoModalProps> = ({ receiveDataItem, categories, onChangeShow}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  
  const itemTodo = {
    id: uuidv4(),
    title: inputTitle,
    category_id: +inputCategory,
    isComplete: false
  };
  const handleAdd = () => {
    receiveDataItem(itemTodo);
    onChangeShow();
  };


  return (
    <div className="grid modal">
      <div className="modal__overlay" />
      <div className="modal__body">
        <div className="modal__inner">
          <div className="modal-form">
            <div className="modal-form__header">
              <h3 className="modal-form__title">ToDoList</h3>
            </div>
            <div className="modal-form__form">
              <div className="modal-form__group">
                <label>TodoList :</label>
                <input
                  type="text"
                  className="modal-form__input"
                  placeholder="Add..."
                  onChange={(e) => setInputTitle(e.target.value)}
                />
              </div>
              <div className="modal-form__group">
                <label htmlFor="modal-form__input--category">Category</label>
                <select
                  className="modal-form__select"
                  id="modal-form__input--category"
                  onChange={(e) => setInputCategory(e.target.value)}
                >
                  {categories.map((item: any, index: number) => (
                    <option key={index} value={item.id}>
                     {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-form__controls">
                <button
                  className="btn btn--close"
                  onClick={() => onChangeShow()}
                >
                  Close
                </button>
                <button className="btn btn--add" onClick={handleAdd}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTodoModal;
