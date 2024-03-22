import Image from "next/image";

const tasks: string[] = ["リンゴ", "パイナップル", "ブドウ", "イチゴ", "ミカン", "バナナ"]

export default function Home() {
    return (
        <>

            <div className="text-3xl text-center p-8 font-bold">
                <h1>タスク作成画面</h1>
            </div>

        </>
    );
}

