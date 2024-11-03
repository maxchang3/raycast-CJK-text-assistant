import { getPreferenceValues } from "@raycast/api"
import { textHandlers } from "./article-copy-tool/handlers"

type Entries<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T][]

const getEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>
const preferences = getPreferenceValues<Preferences>()

getEntries(preferences).forEach(([handlerName, activate]) => {
    textHandlers[handlerName].activate = activate
})

export {
    textHandlers as formatters
}

