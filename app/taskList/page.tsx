'use client'

import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {

    type Task = {
        id: string,
        title: string
    }

    let [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {

        async function acquireTask() {

            const acquire = await fetch('http://localhost:3000/api/tasks')
            const taskInfo = await acquire.json()
            const tasks = taskInfo.tasks
            setTasks(tasks)

        }

        acquireTask()

    }, [])

    return (
        <div>

            <h1 className="text-3xl text-center p-8 font-bold">タスク一覧画面</h1>

            {tasks.map(
                (task) => {
                    return <p key={task.id} className="border-2 text-center w-1/5 p-3 mx-auto m-3">{task.title}</p>
                }
            )}

            <a className="block text-6xl border-4 w-28 h-28 flex items-center justify-center rounded-full font-mono right-20 fixed bottom-20" onClick={() => { window.location.href = "/taskList/create" }}>+</a>

        </div>
    );
}

