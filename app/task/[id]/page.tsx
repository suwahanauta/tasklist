'use client'

import { useParams } from 'next/navigation'

import Image from "next/image";

import axios from "axios";

import { useEffect, useState } from "react";

export default function Home() {

    const param = useParams()

    let [title, setTitle] = useState("")

    useEffect(() => {

        async function catchAPI() {
            const aqcuire = await axios.get('http://localhost:3000/api/task', { params: { id: param.id} })
            const task = aqcuire.data.task
            const title = task.title
            setTitle(title)
        }

        catchAPI()

    })

    return (
        <div>
            <h1 className="text-3xl text-center p-8 font-bold">タスク詳細画面</h1>
            <center><p>{title}</p></center>
        </div>
    );
}