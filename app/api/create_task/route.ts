import { promises } from "fs"
import { NextRequest } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

type Task = {
    id: string
    title: string
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (body.title == undefined) {
            throw Error("パラメータが不足しています")
        }

        const file = await promises.readFile(process.cwd() + '/app/api/data_tasks.json', 'utf8')
        const data = JSON.parse(file)
        const tasks = data.tasks as Task[]

        tasks.push({
            id: (tasks.length + 1).toString(),
            title: body.title,
        })

        promises.writeFile(process.cwd() + '/app/api/data_tasks.json', JSON.stringify({
            tasks: tasks,
        }))

        const response = JSON.stringify({
            tasks: tasks,
        })

        return new Response(undefined, { status: 200 })
    } catch (error) {
        return new Response(error.message, {
            status: 500,
        })
    }
}