import * as React from 'react';
import { styles } from './styles';
import dayjs from 'dayjs';

const TaskLine: React.FC<{
  id?: string;
  title: string;
  description: string;
  status: boolean;
  deadline: string;
  nowData: Date;
  handleDeleteTodo: (id: string) => {};
  handleComplitedTodo: (id: string, status: boolean) => {};
}> = ({
  id,
  title,
  description,
  status,
  deadline,
  nowData,
  handleDeleteTodo,
  handleComplitedTodo,
}) => {
  const classes = styles();

  const isOverdue = nowData.getTime() / 1000 < Number(deadline) ? true : false;

  const formatedDeatline = dayjs.unix(deadline).format('DD/MM/YYYY');

  return (
    <div style={classes.taskWrapper}>
      <div style={classes.taskContent}>
        <div>
          <div style={classes.taskTile}>{title}</div>
          <div style={classes.taskContent}>
            <div>{description}</div>
          </div>
          {status ? (
            <div style={classes.statusDone}>Done</div>
          ) : (
            <div style={classes.statusProgress}>In Progress</div>
          )}
          <div style={isOverdue ? classes.notOverdue : classes.overdue}>
            {' '}
            DeadLine: {formatedDeatline}
          </div>
        </div>
      </div>
      <div style={classes.buttonWrapper}>
        <button style={classes.taskButton} onClick={() => handleDeleteTodo(id)}>
          Delete
        </button>
        <button
          style={classes.taskButton}
          onClick={() => handleComplitedTodo(id, status)}
        >
          Complete
        </button>
        <button style={classes.taskButton}>Edit</button>
      </div>
    </div>
  );
};

export default TaskLine;
