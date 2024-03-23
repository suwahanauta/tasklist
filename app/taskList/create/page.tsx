'use client'

import Image from "next/image";

import { useState } from "react";

export default function Home() {

    const [text, setText] = useState("")

    function textboxValue(e: any) {
        setText(e.target.value)
    }


    return (
        <div>

            <h1 className="font-bold text-3xl m-8 text-center">タスク作成画面</h1>

            <input className="block w-1/5 h-16 text-neutral-950 rounded-md pr-4 pl-4 mt-8 mb-8 mx-auto" onChange={(e) => { textboxValue(e) }} />

            <button className="block font-bold w-1/5 h-16 border-4 rounded-full mt-8 mx-auto" onClick={() => { console.log(text) }}>作成</button>

        </div>
    );
}

