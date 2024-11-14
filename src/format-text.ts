import { showHUD, Clipboard, closeMainWindow } from "@raycast/api"
import { getSelectedNonEmptyText, } from "./lib"
import pangu from "pangu"

export default async function main() {
  const selectionResult = await getSelectedNonEmptyText()
  if (selectionResult.isErr()) return
  const selection = selectionResult.unwrap()
  Clipboard.paste(pangu.spacing(selection))
  showHUD("Text has been auto-corrected.")
  closeMainWindow()
}
