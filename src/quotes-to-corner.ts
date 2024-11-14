import { Clipboard, closeMainWindow, showHUD } from "@raycast/api"
import { copyTools, getSelectedNonEmptyText } from "./lib"

export default async function main() {
    const selectionResult = await getSelectedNonEmptyText()
    if (selectionResult.isErr()) return
    const selection = selectionResult.unwrap()
    const outputText = copyTools["convertQuotesToCornerBracket"].executor(selection)
    Clipboard.paste(outputText)
    showHUD("Text has been auto-corrected.")
    closeMainWindow()
}
