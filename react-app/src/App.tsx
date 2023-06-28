import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const loadReminders = async() => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  }
  useEffect(() => {
    loadReminders();
  }, []);
  const removeReminder = (id: number) => {
    console.log(id);
  }
  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
