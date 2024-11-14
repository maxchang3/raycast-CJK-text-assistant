import { Toast, showHUD, showToast, Clipboard, closeMainWindow } from "@raycast/api"
import { copyTools, getSelectedText } from "./lib"

export default async function main() {
  const selectionResult = await getSelectedText()
  if (selectionResult.isErr()) {
    showToast({
      style: Toast.Style.Failure,
      title: "An error occurred.",
      message: String(selectionResult.error),
    })
    return
  }
  const selection = selectionResult.unwrap()
  const newlineAtEnd = selection.at(-1) === "\n"
  if (selection.trim().length === 0) {
    showHUD("No valid text is selected.")
    closeMainWindow()
    return
  }
  let outputText = selection
  Object.values(copyTools).forEach((textHandler) => {
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
}
