import fs from "node:fs"
import { textHandlers } from "../src/lib/article-copy-tool/handlers"
import packageJSON from "../package.json"

type PreferenceType = "textfield" | "password" | "checkbox" | "dropdown" | "appPicker" | "file" | "directory"

interface CommonPreference<Type extends PreferenceType = PreferenceType> {
    /**
     * A unique id for the preference.
     */
    name: string
    /**
     * The display name of the preference shown in Raycast preferences.
     * For `checkbox`, `textfield` and `password`, it is shown as a section title above the respective input element.
     * 
     * If you want to group multiple checkboxes into a single section, set the title of the first checkbox and leave the title of the other * checkboxes empty.
     */
    title: string
    /**
     * It helps users understand what the preference does. It will be displayed as a tooltip when hovering over it.
     */
    description: string
    /**
     * The preference type. We currently support `textfield` and `password` (for secure entry), `checkbox`, `dropdown`, `appPicker`,
     * `file`, and `directory".
     */
    type: Type
    /**
     * Indicates whether the value is required and must be entered by the user before the extension is usable.
     */
    required: boolean
    /**
     * Text displayed in the preference's field when no value has been input.
     */
    placeholder?: string
    /**
     * The optional default value for the field. For textfields, this is a string value; for checkboxes a boolean; for dropdowns the value * of an object in the data array; for appPickers an application name, bundle ID or path.
     */
    default: Type extends "checkbox" ? boolean : string
}

type CheckBoxPreference = CommonPreference<"checkbox"> & {
    /**
     * The label of the checkbox. Shown next to the checkbox.
     */
    label: string
}

type DropdownPreference = CommonPreference<"dropdown"> & {
    /**
     * An array of objects with title and value properties, e.g.: `[{"title": "Item 1", "value": "1"}]`
     */
    data: Array<{ title: string, value: string }>
}

type Preference<Type extends PreferenceType = PreferenceType> =
    Type extends "checkbox" ? CheckBoxPreference :
    Type extends "dropdown" ? DropdownPreference :
    CommonPreference<Type>

export const manifestgen = () => {
    const preferences: Preference[] = Object.entries(textHandlers)
        .map(([handlerName, { activate, description }]) => {
            const preference = {
                name: handlerName,
                title: description,
                description,
                type: "checkbox",
                required: false,
                default: activate,
                label: "开启"
            } as const
            return preference
        })
    return JSON.stringify(preferences, null, 2)
}

export const typegen = () => {
    const preferencesType = Object.entries(textHandlers)
        .map(([handlerName, { activate, description }]) =>
            `    /**
     * ${description}
     * @default ${activate ? "true" : "false"}
     * @type {boolean}
     **/
    ${handlerName}: ${activate ? "true" : "false"}`
        )
    return `export interface Preferences {\n${preferencesType.join("\n")}\n}`
}

export const mdgen = () => {
    const cells = Object.entries(textHandlers)
        .map(([, { activate, description }]) =>
            `| ${description} | ${activate ? "**是**" : "否"} |`
        )
    return `# 默认设置 \n\n| 功能 | 是否默认开启 |\n| --- | --- |\n${cells.join("\n")}\n`
}

export const action = (type: string) => {
    switch (type) {
        case "manifest":
            packageJSON.preferences = JSON.parse(manifestgen())
            fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2))
            console.log("\x1b[32mPreferences have been written to \x1b[34mpackage.json\x1b[0m")
            break
        case "typegen":
            fs.writeFileSync("src/lib/types.ts", typegen())
            console.log("\x1b[32mType definitions have been written to \x1b[34msrc/lib/types.ts\x1b[0m")
            break
        case "mdgen":
            // 追加文本到 CONFIG.md
            fs.writeFileSync("CONFIG.md", mdgen())
            console.log("\x1b[32mMarkdown table has been appended to \x1b[34mCONFIG.md\x1b[0m")
            break
        default:
            break
    }
}

action(process.argv[2])
