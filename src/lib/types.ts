// This file is automatically generated. Do not edit it directly. 此文件为自动生成，请勿直接修改。
export interface Preferences {
    /**
     * 将英文标点转换为中文标点
     **/
    transferEnglishPunctuationToChinese: false
    /**
     * 将中文标点转换为英文标点
     **/
    transferChinesePunctuationToEnglish: false
    /**
     * 删除引用角标，如: (1), (2, 3), (4-7)
     **/
    deleteReferenceCurveBadge: false
    /**
     * 删除引用角标，如: [1], [2, 3], [4-7]
     **/
    deleteReferenceBadge: true
    /**
     * 全角字符转半角字符
     **/
    convertFullWidthCharactersToHalfWidth: false
    /**
     * 删除重复的换行符
     **/
    deleteMultipleNewlines: true
    /**
     * 将换行符替换为空格
     **/
    replaceNewlinesWithSpaces: true
    /**
     * 删除掉重复的空格
     **/
    replaceMultipleSpacesWithASingleSpace: true
    /**
     * 删除非英文字母间的空格
     **/
    removeSpacesBetweenNonEnglishLetters: true
    /**
     * 在标点符号后添加空格
     **/
    addSpaceAfterEnglishPunctuation: true
    /**
     * 删除小数点和数字之间的空格
     **/
    deleteSpaceBetweenDotAndNumber: true
    /**
     * 在字母与数字之间添加空格
     **/
    addSpacesBetweenEnglishLettersAndNumbers: false
    /**
     * 删除冒号和数字之间的空格
     **/
    deleteSpaceBetweenColonAndNumber: false
    /**
     * 规范中文排版（参考 https://sspai.com/post/37815 ）
     **/
    addWhiteOfPanGu: true
    /**
     * 将简体中文转换为繁体中文
     **/
    switchSimplifiedChineseToTraditionalChinese: false
    /**
     * 将繁体中文转换为简体中文
     **/
    switchTraditionalChineseToSimplifiedChinese: false
}