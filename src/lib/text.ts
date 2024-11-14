import { closeMainWindow, showHUD, showToast, Toast } from "@raycast/api"
import { getSelectedText } from "./nothrow"
import { Err, Ok, Result } from "ts-results-es"

export const getSelectedNonEmptyText = async (): Promise<Result<string, string>> => {
    const selectionResult = await getSelectedText()
    if (selectionResult.isErr()) {
        const errtext = String(selectionResult.error)
        showToast({
            style: Toast.Style.Failure,
            title: "An error occurred.",
            message: errtext,
        })
        return Err(errtext)
    }
    const selection = selectionResult.unwrap()
    if (selection.trim().length === 0) {
        const errtext = "No valid text is selected."
        showHUD(errtext)
        closeMainWindow()
        return Err(errtext)
    }
    return Ok(selection)
}
