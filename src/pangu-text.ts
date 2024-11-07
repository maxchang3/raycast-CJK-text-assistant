import {
    Toast,
    showHUD,
    showToast,
    Clipboard,
    getSelectedText,
    closeMainWindow,
} from "@raycast/api"
import pangu from "pangu"

export default async function main() {
    try {
        const selection = await getSelectedText()
        if (selection.trim().length === 0) {
            showHUD("No valid text is selected.")
            closeMainWindow()
            return
        }
        Clipboard.paste(pangu.spacing(selection))
        showHUD("Text has been auto-corrected.")
        closeMainWindow()
    } catch (error) {
        showToast({
            style: Toast.Style.Failure,
            title: "An error occurred.",
        })
    }
}
