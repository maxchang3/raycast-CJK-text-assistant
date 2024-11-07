/**
 * This file is part of a project distributed under the AGPL-3.0 License.
 *
 * Source: https://github.com/laorange/paper-assistant
 * Original Filepath: src/assets/ts/article-copy-tool/handlers.ts
 * Commit: be95303
 * This file was originally created by the authors of the above project and
 * is reused here in accordance with the AGPL-3.0 License.
 */

import pangu from "pangu"
import { Converter } from "opencc-js"

export interface TextHandler {
  activate: boolean // 默认是否启用
  description: string // 对该功能的描述
  executor: (text: string) => string // 功能函数
}

export interface TextHandlers {
  [handlerName: string]: TextHandler
}

export interface TextHandlerWithName extends TextHandler {
  handlerName: string
}

export type ReplaceTuple = [RegExp | string, string]

export const textHandlers: TextHandlers = {
  transferEnglishPunctuationToChinese: {
    activate: false,
    description: "将英文标点转换为中文标点",
    executor: (text) => {
      const punctuationTuples: ReplaceTuple[] = [
        [/'([\s\S]+?)'/g, "‘$1’"],
        [/"([\s\S]+?)"/g, "“$1”"],
        [",", "，"],
        [/\.(\D)/g, "。$1"] /** `\D`:避免是小数点 */,
        [":", "："],
        [";", "；"],
        ["[", "【"],
        ["]", "】"],
        ["?", "？"],
        ["(", "（"],
        [")", "）"],
        ["!", "！"],
      ]
      return punctuationTuples.reduce((t, tuple) => t.replaceAll(tuple[0], tuple[1]), text)
    },
  },

  transferChinesePunctuationToEnglish: {
    activate: false,
    description: "将中文标点转换为英文标点",
    executor: (text) => {
      const punctuationTuples: ReplaceTuple[] = [
        [/[‘’]/g, "'"],
        [/[“”]/g, '"'],
        ["，", ","],
        ["。", "."],
        ["：", ":"],
        ["；", ";"],
        ["【", "["],
        ["】", "]"],
        ["？", "?"],
        ["（", "("],
        ["）", ")"],
        ["！", "!"],
      ]
      return punctuationTuples.reduce((t, tuple) => t.replaceAll(tuple[0], tuple[1]), text)
    },
  },

  deleteReferenceCurveBadge: {
    description: "删除引用角标，如: (1), (2, 3), (4-7)",
    activate: false,
    executor: (text) => text.replaceAll(/\([\d,\-\s]+\)/g, ""),
  },

  deleteReferenceBadge: {
    description: "删除引用角标，如: [1], [2, 3], [4-7]",
    activate: true,
    executor: (text) => {
      text = text.replaceAll(/\[[\d,\-\s]+]/g, "")
      text = text.replaceAll(/【[\d,\-\s]+】/g, "")
      return text
    },
  },

  /** 全角转半角, 参考：
   * 1. https://www.cnblogs.com/html55/p/10298569.html
   * 2. https://unicode-table.com/cn/search/?q=%E5%85%A8%E5%BD%A2%E6%95%B0%E5%AD%97 */
  convertFullWidthCharactersToHalfWidth: {
    activate: false,
    description: "全角字符转半角字符",
    executor: (text: string) => {
      let result = ""
      for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i)
        // 中文空格替换为英文空格
        if (char == 12288) {
          result += " "
        } else if (
          char > 65280 &&
          char < 65375 &&
          // 对以下全角字符不做转换
          [..."，：；·！#￥%…（）"].indexOf(text[i]) === -1
        ) {
          result += String.fromCharCode(char - 65248)
        } else {
          result += String.fromCharCode(text.charCodeAt(i))
        }
      }
      return result
    },
  },

  deleteMultipleNewlines: {
    activate: true,
    description: "删除重复的换行符",
    executor: (text: string) => text.replaceAll(/[\f\r\t\n]+/g, "\n"),
  },

  /** 替换换行符为空格 (参考：https://blog.csdn.net/lfod1997/article/details/121095287) */
  replaceNewlinesWithSpaces: {
    activate: true,
    description: "将换行符替换为空格",
    executor: (text: string) => text.replaceAll(/[\f\r\t\n]/g, " "),
  },

  replaceMultipleSpacesWithASingleSpace: {
    activate: true,
    description: "删除掉重复的空格",
    executor: (text: string) => text.replaceAll(/ +/g, " "),
  },

  removeSpacesBetweenNonEnglishLetters: {
    activate: true,
    description: "删除非英文字母间的空格",
    executor: (text: string) => text.replaceAll(/([^A-Za-z"':]) +/g, "$1").replaceAll(/ +([^A-Za-z"':])/g, "$1"),
  },

  addSpaceAfterEnglishPunctuation: {
    activate: true,
    description: "在标点符号后添加空格",
    executor: (text: string) =>
      text.replaceAll(/([,.?:;])([^,.?:;\s])/g, "$1 $2").replaceAll(/(\))([a-zA-Z\d])/g, "$1 $2"),
  },

  deleteSpaceBetweenDotAndNumber: {
    activate: true,
    description: "删除小数点和数字之间的空格",
    executor: (text: string) => text.replaceAll(/(\.)\s+(\d)/g, "$1$2"),
  },

  addSpacesBetweenEnglishLettersAndNumbers: {
    activate: false,
    description: "在字母与数字之间添加空格",
    executor: (text: string) => text.replaceAll(/(\d)([A-Za-z])/g, "$1 $2").replaceAll(/([A-Za-z])(\d)/g, "$1 $2"),
  },

  deleteSpaceBetweenColonAndNumber: {
    activate: false,
    description: "删除冒号和数字之间的空格",
    executor: (text: string) => text.replaceAll(/(:)\s+(\d)/g, "$1$2"),
  },

  addWhiteOfPanGu: {
    description: `规范中文排版（使用 pangu.js）`,
    activate: true,
    executor: (text: string) => pangu.spacing(text),
  },

  switchSimplifiedChineseToTraditionalChinese: {
    description: "将简体中文转换为繁体中文",
    activate: false,
    executor: (text: string) => {
      const converter = Converter({ from: "cn", to: "hk" })
      return converter(text)
    },
  },

  switchTraditionalChineseToSimplifiedChinese: {
    description: "将繁体中文转换为简体中文",
    activate: false,
    executor: (text: string) => {
      const converter = Converter({ from: "hk", to: "cn" })
      return converter(text)
    },
  },
}
