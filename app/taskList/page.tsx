'use client'

import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {

    let [tasks, setTasks] = useState<string[]>([])

    useEffect(() => {

        async function acquireTask() {

            const acquire = await fetch('http://localhost:3000/api/tasks')
            const taskInfo = await acquire.json()

            for (let i = 0; i < taskInfo.tasks.length; i++) {
                const task = taskInfo.tasks[i].title
                setTasks((oldvalue => [...oldvalue, task]))
            }

        }

        acquireTask()

    }, [])

    return (
        <div>

            <h1 className="text-3xl text-center p-8 font-bold">タスク一覧画面</h1>

            {tasks.map(
                (task, index) => {
                    return <p key={index} className="border-2 text-center w-1/5 p-3 mx-auto m-3">{task}</p>
                }
            )}

            <button className="text-6xl border-4 w-28 h-28 flex items-center justify-center rounded-full font-mono right-20 fixed bottom-20" onClick={() => {}}>+</button>

        </div>
    );
}

