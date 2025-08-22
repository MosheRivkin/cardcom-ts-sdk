export const buttonLocale = {
    "Arabic": "Arabic",
    "Bulgarian": "Bulgarian",
    "Catalan": "Catalan",
    "Chinese": "Chinese",
    "Croatian": "Croatian",
    "Czech": "Czech",
    "Danish": "Danish",
    "Dutch": "Dutch",
    "English": "English",
    "Estonian": "Estonian",
    "Finnish": "Finnish",
    "French": "French",
    "German": "German",
    "Greek": "Greek",
    "Indonesian": "Indonesian",
    "Italian": "Italian",
    "Japanese": "Japanese",
    "Korean": "Korean",
    "Malay": "Malay",
    "Norwegian": "Norwegian",
    "Polish": "Polish",
    "Portuguese": "Portuguese",
    "Russian": "Russian",
    "Serbian": "Serbian",
    "Slovak": "Slovak",
    "Slovenian": "Slovenian",
    "Spanish": "Spanish",
    "Swedish": "Swedish",
    "Thai": "Thai",
    "Turkish": "Turkish",
    "Ukrainian": "Ukrainian"
} as const;

export type ButtonLocaleEnum = (typeof buttonLocale)[keyof typeof buttonLocale];

export type ButtonLocale = ButtonLocaleEnum;