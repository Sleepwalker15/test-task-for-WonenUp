import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import dayjs from 'dayjs';
import db from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const TaskInput: React.ElementType<{
  id: string;
  title: string;
  description: string;
  status: boolean;
  deadline: string;
  nowData: Date;
}> = ({ id, title, description, status, deadline, nowData }) => {
  const classes = styles();

  const todayDateFormated = dayjs(nowData).format('YYYY-MM-DD');

  const [editableTitle, setEditableTitle] = useState<string>(title);
  const [editableDescription, setEditableDescription] = useState<string>(description);
  const [editableDate, setEditableDate] = useState<string>(todayDateFormated);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log(editableTitle, editableDescription);

    if (title !== '') {
      await addDoc(collection(db, 'todos'), {
        title: editableTitle,
        completed: false,
        description: editableDescription,
        deadline: new Date(editableDate),
      });
    }
  };

  return (
    <div style={classes.taskWrapper}>
      <form onSubmit={handleSubmit} style={classes.taskContent}>
        <div style={classes.inputWrapper}>
          <input
            style={classes.inputTask}
            type="text"
            placeholder="Enter title..."
            value={editableTitle}
            onChange={(e) => setEditableTitle(e.target.value)}
          />
          <input
            style={classes.inputTask}
            type="text"
            placeholder="Enter description..."
            value={editableDescription}
            onChange={(e) => setEditableDescription(e.target.value)}
          />
          <input
            type="date"
            style={classes.inputTask}
            min={todayDateFormated}
            value={editableDate}
            onChange={(e) => {
              setEditableDate(e.target.value);
            }}
          />
        </div>
        <div style={classes.buttonWrapper}>
          <button style={classes.addButton}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
