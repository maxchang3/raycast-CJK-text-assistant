import { watch, type WatchEventType } from "fs"
import { execSync } from "child_process"

const PREFIX = `\x1b[42m[Devtool]\x1b[0m `
const TARGET = `src/lib/article-copy-tool/handlers.ts`

const logger = (msg: string) => console.log(`${PREFIX}${msg}`)

logger(`Watching for changes in \x1b[32m${TARGET}\x1b[0m`)

const handler = (e: WatchEventType) => {
    if (e !== "change") return
    logger(`File changed: \x1b[32m${TARGET}\x1b[0m`)
    execSync("tsx scripts/utils.ts typegen", { stdio: "inherit" })
    execSync("tsx scripts/utils.ts manifest", { stdio: "inherit" })
    execSync("tsx scripts/utils.ts mdgen", { stdio: "inherit" })
}

watch(TARGET, handler)
watch("scripts/utils.ts", handler)
