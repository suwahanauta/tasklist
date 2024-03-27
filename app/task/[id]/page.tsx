'use client'

import { useParams } from 'next/navigation'

import Image from "next/image"

import { useEffect, useState } from "react"

export default function Home() {

    const param = useParams()

    const [title, setTitle] = useState()

    useEffect(() => {

        async function getTask() {
            const aqcuire = await fetch(`http://localhost:3000/api/task?id=${param.id}`)
            const json = await aqcuire.json()
            setTitle(json.task.title)
        }
        getTask()

    },[])

    return (
        <div>
            <h1 className="text-3xl text-center p-8 font-bold">タスク詳細画面</h1>
            <p className='text-center'>{title}</p>
        </div>
    );
}