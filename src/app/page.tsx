"use client";
import { useState } from "react";
import { addTask } from "@/app/api/add/route";
import { NextRequest } from "next/server";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const request = new NextRequest("http:/localhost:3000/api/add", {
    method: "POST",
    body: JSON.stringify({ text: text }),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setTasks([...tasks, text]);
    // setText("");
    addTask(request);
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
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
