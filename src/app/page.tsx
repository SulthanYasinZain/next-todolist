"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks([...tasks, text]);
    setText("");
  }

  function handleDelete(indexToDelete: number) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }
  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            className="border border-black hover:border-gray-500"
            value={text}
            type="text"
            placeholder="Add New Task"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
