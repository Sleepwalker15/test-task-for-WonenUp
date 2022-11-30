import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TaskLine from '../taskLine/TaskLine';
import TaskInput from '../taskInput/TaskInput';
import db from '../../firebase/firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';


type todoType ={
  completed:boolean,
  deadline:number,
  description:string,
  id: string;
  isEdit: boolean,
  title: string
}


const TodoList: React.FC = () => {
  const classes = styles();
  const [todos, setTodos] = useState<todoType[]>([]);

  const nowDate = new Date();

  


  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArray:todoType[] = [];
      querySnapshot.forEach((item) => {
        todosArray.push({
          ...item.data(),
          id: item.id,
          deadline: item.data().deadline.seconds,
          isEdit: false,
        });
      });
      setTodos(todosArray);
    });
    // return () => unsubscribe();
  }, []);

  const handleDeleteTodo = async (id:string) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const handleComplitedTodo = async (id:string, status:boolean) => {
    await updateDoc(doc(db, 'todos', id), {
      completed: !status,
    });
  };

  const handleEditTodo = () => {};

  return (
    <div style={classes.todoListWrapper}>
      <TaskInput nowData={nowDate} />

      {todos.map((todo) => {
        if (todo.isEdit) {
          return (
            <TaskInput
              id={todo.id}
              title={todo.title}
              description={todo.description}
              status={todo.status}
              deadline={todo.deadline}
              nowData={nowDate}
            />
          );
        } else {
          return (
            <TaskLine
              id={todo.id}
              title={todo.title}
              description={todo.description}
              status={todo.completed}
              deadline={todo.deadline}
              nowData={nowDate}
              handleDeleteTodo={handleDeleteTodo}
              handleComplitedTodo={handleComplitedTodo}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoList;
