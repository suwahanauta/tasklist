import Image from "next/image";

const tasks: string[] = ["リンゴ", "パイナップル", "ブドウ", "イチゴ", "ミカン", "バナナ"]

export default function Home() {
    return (
        <>

            <div className="text-3xl text-center p-8 font-bold">
                <h1>タスク一覧画面</h1>
            </div>
            
            <div>
                {tasks.map(
                    (task) => {
                        return <p className="border-2 text-center w-1/5 p-3 mx-auto m-3">{task}</p>
                    }
                )}
            </div>

            <div className="text-6xl border-4 w-28 h-28 flex items-center justify-center rounded-full font-mono right-20 fixed bottom-20">
                <p>+</p>
            </div>

        </>
    );
}

