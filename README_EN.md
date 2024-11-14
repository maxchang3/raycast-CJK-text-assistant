[简体中文](./README.md) | English
<br>
<br>
<p align="center">
<img src="./assets/extension-icon.png" width="140" height="140" align="center" />
</p>

<h1 align="center">CJK Text Assistant<sup>for Raycast</sup></h1>

<p align="center">

Improve the formatting of Chinese, Japanese, and Korean(CJK) text (especially when mixed with English) with the following two commands:
* **Improve Copied Text**: Improve the formatting of text copied from PDFs or OCR，remove extra spaces, line breaks, and garbled characters. (ported from [paper-assistant](https://github.com/laorange/paper-assistant)，mainly for Chinese text)
* **Format Text**: Add spaces between CJK characters and English characters. (via [pangu.js](https://github.com/vinta/pangu.js))
* **Convert Quotes to Corner Bracket**: Convert quotes to corner brackets（“” -> 「」，‘’ -> 『』）。

</p>

## Motivation

Recently, I've been copying content from various papers and books (mostly PDFs), and when formatting issues cropped up, I discovered the incredibly useful [paper-assistant](https://github.com/laorange/paper-assistant) tool. At the same time, I was also using a Raycast plugin—[raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format)—which uses [pangu.js](https://github.com/vinta/pangu.js) to add spaces between Chinese and English characters. One day, while pasting text with extra spaces, it struck me: why not combine the two? And that’s how this idea came to life.

## Installation

Currently, you need to clone this repo and install it locally in developer mode.

You will need to have Node.js and pnpm installed.

1. Clone this repo `git clone https://github.com/maxchang3/raycast-CJK-text-assistant.git`
2. Go to the folder `cd raycast-CJK-text-assistant`
3. Install dependencies `pnpm install`
4. Go to Raycast, run Import Extension and select the folder

Due to licensing reasons, there are **no possibility** to publish this to [raycast/extensions](https://github.com/raycast/extensions).

## Features

### Format Text

Add spaces between CJK characters and English characters.

### Improve Copied Text

Inherits almost all features from [paper-assistant](https://github.com/laorange/paper-assistant):

* Remove reference marks, such as: [1], [2, 3], [4-7], (1), (2, 3), (4-7)...
* Convert full-width characters to half-width characters
* Batch replace characters
* Convert Chinese characters between simplified and traditional
* Convert Chinese and English punctuation
* ······

Compared to the original project:
* **Chinese typesetting optimization** is enabled by default, see [CONFIG. MD](CONFIG.md) for default values
* For line breaks at the end of a line, they will be retained separately

## Credits

* [paper-assistant](https://github.com/laorange/paper-assistant) for inspiration and some code.
* [raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format) for the idea of using pangu.js.
* [raycast-multi-translate](https://github.com/antfu/raycast-multi-translate) for the README template.

## License

[AGPL-3.0](./LICENSE)
