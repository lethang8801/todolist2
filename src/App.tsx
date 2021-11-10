import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddNewTodoModal from "./components/Modal/AddNewTodoModal";
import ButtonShowAddNewTodoModal from "./components/Button/ButtonShowAddNewTodoModal";
import { categories } from "./data/categories";
import axios from "axios";
import "./App.css";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);
  const [todoList, setTodoList] = useState<object[]>([ ]);

  useEffect(() => {
    axios
      .get(`https://618b34143013680017343f9a.mockapi.io/todolist`)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChangeShow = () => {
    setIsShowModal(!isShowModal);
    setIsShowButton(!isShowButton);
  };

  const handleCheckBox = (id: string) => {
    todoList.filter((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = true;
        setTodoList((prev: object[]) => [...prev]);
      }
      return () => {};
    });
  };
  const dataTodoItem = (itemTodo: object) => {
    setTodoList((prev: object[]) => [...prev, itemTodo]);
  };

  return (
    <div className="app">
      {isShowButton && (
        <ButtonShowAddNewTodoModal onChangeShow={handleChangeShow} />
      )}

      <div className="main">
        <div className="grid">
          <Header todos={todoList} />
          <TodoList
            todos={todoList}
            categories={categories}
            onCheckBox={(id) => handleCheckBox(id)}
          />
        </div>
      </div>

      {isShowModal && (
        <AddNewTodoModal
          onChangeShow={handleChangeShow}
          categories={categories}
          receiveDataItem={(itemTodo: object) => dataTodoItem(itemTodo)}
        />
      )}
    </div>
  );
}

export default App;
