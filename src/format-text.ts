import { Toast, showHUD, showToast, Clipboard, closeMainWindow } from "@raycast/api"
import { getSelectedText } from "./lib"
import pangu from "pangu"

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
  if (selection.trim().length === 0) {
    showHUD("No valid text is selected.")
    closeMainWindow()
    return
  }
  Clipboard.paste(pangu.spacing(selection))
  showHUD("Text has been auto-corrected.")
  closeMainWindow()
}
