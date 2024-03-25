import { promises } from "fs"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    const file = await promises.readFile(process.cwd() + '/app/api/data_tasks.json', 'utf8')
    const data = JSON.parse(file)

    return new Response(data, {
        status: 200,
    })
}