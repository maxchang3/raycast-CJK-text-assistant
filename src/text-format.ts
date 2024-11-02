import {
    Toast,
    showHUD,
    showToast,
    Clipboard,
    getSelectedText,
    closeMainWindow,
} from "@raycast/api"
import { formatters } from "./lib"

export default async function main() {
    try {
        const selection = await getSelectedText()
        const newlineAtEnd = selection.at(-1) === "\n"
        if (selection.trim().length === 0) {
            showHUD("No valid text is selected.")
            closeMainWindow()
            return
        }
        let outputText = selection
        Object.values(formatters).forEach((textHandler) => {
            if (textHandler.activate) {
                outputText = textHandler.executor(outputText)
            }
        })
        if (newlineAtEnd) {
            outputText += "\n"
        }
        Clipboard.paste(outputText)
        showHUD("Text has been auto-corrected.")
        closeMainWindow()
    } catch (error) {
        showToast({
            style: Toast.Style.Failure,
            title: "An error occurred.",
        })
    }
}

