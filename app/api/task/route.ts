import { promises } from "fs"
import { NextRequest } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

type Task = {
    id: string
    title: string
}

export async function GET(request: NextRequest) {
    const taskId = request.nextUrl.searchParams.get("id")

    if (taskId == undefined) {
        return new Response("タスクIDが指定されていません", { status: 500 })
    }

    const file = await promises.readFile(process.cwd() + '/app/api/data_tasks.json', 'utf8')
    const data = JSON.parse(file)

    const tasks = data.tasks as Task[]
    const task = tasks.find(task => task.id == taskId)

    const response = JSON.stringify({
        task: task
    })

    return new Response(response, {
        status: 200,
    })
}