import React from 'react';
import Reminder  from '../models/Reminder';


interface ReminderListProps{
 items: Reminder[]
}

function ReminderList(props:ReminderListProps) {
 return (
  <ul>
   {
    props.items.map(item => <li key={item.id}>{ item.title }</li>)
   }
  </ul>
 );
}

export default ReminderList;