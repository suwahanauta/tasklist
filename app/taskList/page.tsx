import Image from "next/image";

const tasks: string[] = ["リンゴ", "パイナップル", "ブドウ", "イチゴ", "ミカン", "バナナ"]

export default function Home() {
    return (
        <>

            <div className="text-[30px] text-center p-[30px] font-bold">
                <h1>タスク一覧画面</h1>
            </div>

            <div>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[0]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[1]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[2]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[3]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[4]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[5]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[0]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[1]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[2]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[3]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[4]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[5]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[0]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[1]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[2]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[3]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[4]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[5]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[0]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[1]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[2]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[3]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[4]}</p>
                <p className="border-2 text-center w-1/5 p-[10px] mx-auto m-[10px]">{tasks[5]}</p>
            </div>

            <div className="text-[60px] border-4 w-[120px] h-[120px] flex items-center justify-center rounded-full font-mono right-[90px] fixed bottom-[90px]">
                <p>+</p>
            </div>

        </>
    );
}

