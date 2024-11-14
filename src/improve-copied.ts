import { showHUD, Clipboard, closeMainWindow } from "@raycast/api"
import { copyTools, getSelectedNonEmptyText, } from "./lib"

export default async function main() {
  const selectionResult = await getSelectedNonEmptyText()
  if (selectionResult.isErr()) return
  const selection = selectionResult.unwrap()
  const newlineAtEnd = selection.at(-1) === "\n"
  let outputText = selection
  Object.values(copyTools).forEach((textHandler) => {
    if (textHandler.activate) {
      outputText = textHandler.executor(outputText)
    }
  })
  if (newlineAtEnd) outputText += "\n"
  Clipboard.paste(outputText)
  showHUD("Text has been auto-corrected.")
  closeMainWindow()
}
