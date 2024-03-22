import Image from "next/image";

export default function Home() {
    return (
        <div>

            <h1 className="font-bold text-3xl m-8 text-center">タスク作成画面</h1>

            <input className="block w-1/5 h-16 text-neutral-950 rounded-md pr-4 pl-4 mt-8 mb-8 mx-auto"/>

            <button className="block font-bold w-1/5 h-16 border-4 rounded-full mt-8 mx-auto">作成</button>

        </div>
    );
}

