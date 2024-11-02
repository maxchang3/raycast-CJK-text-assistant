export interface Preferences {
    /**
     * 将英文标点转换为中文标点
     * @default false
     * @type {boolean}
     **/
    transferEnglishPunctuationToChinese: false
    /**
     * 将中文标点转换为英文标点
     * @default false
     * @type {boolean}
     **/
    transferChinesePunctuationToEnglish: false
    /**
     * 删除引用角标，如: (1), (2, 3), (4-7)
     * @default false
     * @type {boolean}
     **/
    deleteReferenceCurveBadge: false
    /**
     * 删除引用角标，如: [1], [2, 3], [4-7]
     * @default true
     * @type {boolean}
     **/
    deleteReferenceBadge: true
    /**
     * 全角字符转半角字符
     * @default false
     * @type {boolean}
     **/
    convertFullWidthCharactersToHalfWidth: false
    /**
     * 删除重复的换行符
     * @default true
     * @type {boolean}
     **/
    deleteMultipleNewlines: true
    /**
     * 将换行符替换为空格
     * @default true
     * @type {boolean}
     **/
    replaceNewlinesWithSpaces: true
    /**
     * 删除掉重复的空格
     * @default true
     * @type {boolean}
     **/
    replaceMultipleSpacesWithASingleSpace: true
    /**
     * 删除非英文字母间的空格
     * @default true
     * @type {boolean}
     **/
    removeSpacesBetweenNonEnglishLetters: true
    /**
     * 在标点符号后添加空格
     * @default true
     * @type {boolean}
     **/
    addSpaceAfterEnglishPunctuation: true
    /**
     * 删除小数点和数字之间的空格
     * @default true
     * @type {boolean}
     **/
    deleteSpaceBetweenDotAndNumber: true
    /**
     * 在字母与数字之间添加空格
     * @default false
     * @type {boolean}
     **/
    addSpacesBetweenEnglishLettersAndNumbers: false
    /**
     * 删除冒号和数字之间的空格
     * @default false
     * @type {boolean}
     **/
    deleteSpaceBetweenColonAndNumber: false
    /**
     * 规范中文排版（参考 https://sspai.com/post/37815）
     * @default true
     * @type {boolean}
     **/
    addWhiteOfPanGu: true
    /**
     * 将简体中文转换为繁体中文
     * @default false
     * @type {boolean}
     **/
    switchSimplifiedChineseToTraditionalChinese: false
    /**
     * 将繁体中文转换为简体中文
     * @default false
     * @type {boolean}
     **/
    switchTraditionalChineseToSimplifiedChinese: false
}