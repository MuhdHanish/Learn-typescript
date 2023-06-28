import React from 'react';
import Reminder from '../models/Reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList(props: ReminderListProps) {
  return (
    <ul className='list-group'>
      {props.items.map(item => (
        <li key={item.id} className='list-group-item'>
          {item.title}
          <button className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => props.onRemoveReminder(item.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
