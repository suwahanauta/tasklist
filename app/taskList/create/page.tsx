'use client'

import Image from "next/image";

import { useRef } from "react";

export default function Home() {

    const inputRef = useRef<HTMLInputElement>(null)

    async function postTask() {

        if (inputRef.current?.value == "") {
            alert("失敗！")
            return
        }

        const post = await fetch('http://localhost:3000/api/create_task', { method: 'POST', body: JSON.stringify({ title: inputRef.current?.value }) })

        if (post.status == 200) {
            alert("成功！")
        } else {
            alert("失敗！")
        }
    }

    return (
        <div>

            <h1 className="font-bold text-3xl m-8 text-center">タスク作成画面</h1>

            <input ref={inputRef} className="block w-1/5 h-16 text-neutral-950 rounded-md pr-4 pl-4 mt-8 mb-8 mx-auto" type="text" />

            <button className="block font-bold w-1/5 h-16 border-4 rounded-full mt-8 mx-auto" onClick={() => { postTask() }}>作成</button>

        </div>
    );
}

