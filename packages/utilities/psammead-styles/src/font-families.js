/*
 *  BBC REITH
 */

const reithFallback = `Helvetica, Arial, sans-serif;`;
const reithSans = `font-family: ReithSans, ${reithFallback}`;
const reithSerif = `font-family: ReithSerif, ${reithFallback}`;

const getFontStyleAndWeight = (style, weight) =>
  `font-weight: ${weight};
   font-style: ${style};`;

const latinReithFontStyles = {
  sansRegular: `
   ${reithSans}
   ${getFontStyleAndWeight('normal', 400)} 
  `,
  sansRegularItalic: `
   ${reithSans}
   ${getFontStyleAndWeight('italic', 400)} 
  `,
  sansBold: `
   ${reithSans}
   ${getFontStyleAndWeight('normal', 700)}
  `,
  sansBoldItalic: `
   ${reithSans}
   ${getFontStyleAndWeight('italic', 700)}
  `,
  serifRegular: `
   ${reithSerif}
   ${getFontStyleAndWeight('normal', 400)}
  `,
  serifMedium: `
   ${reithSerif}
   ${getFontStyleAndWeight('normal', 500)} 
  `,
  serifMediumItalic: `
   ${reithSerif}
   ${getFontStyleAndWeight('italic', 500)}
  `,
  serifBold: `
    ${reithSerif}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  HELMET
 */

const helmet = `font-family: Helmet, Freesans, Helvetica, Arial, sans-serif;`;

const helmetFontStyles = {
  sansRegular: `
    ${helmet}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansRegularItalic: `
    ${helmet}
    ${getFontStyleAndWeight('italic', 400)}
  `,
  sansBold: `
    ${helmet}
    ${getFontStyleAndWeight('normal', 700)}
  `,
  sansBoldItalic: `
    ${helmet}
    ${getFontStyleAndWeight('italic', 700)}
  `,
};

/*
 *  BBC NASSIM
 */

const nassimArabicFontFamily = `font-family: "BBC Nassim Arabic", Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPashtoFontFamily = `font-family: "BBC Nassim Pashto", Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimPersianFontFamily = `font-family: "BBC Nassim Persian", Arial, Verdana, Geneva, Helvetica, sans-serif;`;
const nassimUrduFontFamily = `font-family: "BBC Nassim Urdu", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const nassimFontStyles = fontFamily => ({
  sansRegular: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${fontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
});

/*
 *  AMHARIC
 */
const amharicFontFamily = `font-family: "Noto Sans Ethiopic", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const amharicStyles = {
  sansRegular: `
    ${amharicFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${amharicFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  BENGALI
 */
const bengaliFontFamily = `font-family: "Shonar Bangla", Helmet, Freesans, Helvetica, Arial, sans-serif;`;

const bengaliStyles = {
  sansRegular: `
    ${bengaliFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${bengaliFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  BURMESE
 */
const burmeseFontFamily = `font-family: Padauk, Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const burmeseStyles = {
  sansRegular: `
    ${burmeseFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${burmeseFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  CHINESE
 */
const chineseFontFamily = `font-family: Helvetica, Arial, STHeiti, 华文黑体, "Microsoft YaHei", 微软雅黑, SimSun, 宋体;`;

const chineseFontStyles = {
  sansRegular: `
    ${chineseFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${chineseFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  GUJARATI
 */
const gujaratiFontFamily = `font-family: "Mukta Vaani", Rasa, "Noto Sans Gujarati", "Hind vadodara", Shruti, Gautami, "Gujarati Sangam MN", "Gujarati MT", sans-serif;`;

const gujaratiStyles = {
  sansRegular: `
    ${gujaratiFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${gujaratiFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  HINDI
 */
const hindiFontFamily = `font-family: "Noto Sans Devanagari", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const hindiStyles = {
  sansRegular: `
    ${hindiFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${hindiFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  JAPANESE
 */
const japaneseFontFamily = `font-family: "Hiragino Kaku Gothic Pro", "ﾋﾗギﾉ角ゴPro W3", "MS PGothic", "MS UI Gothic", Helvetica, Arial, sans-serif;`;

const japaneseStyles = {
  sansRegular: `
    ${japaneseFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${japaneseFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  KOREAN
 */
const koreanFontFamily = `font-family: "Apple SD Gothic Neo", AppleGothic, "Malgun Gothic", Dotum, "Noto Sans CJK KR", sans-serif;`;

const koreanStyles = {
  sansRegular: `
    ${koreanFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${koreanFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  MARATHI
 */
const marathiFontFamily = `font-family: "Noto Sans Devanagari", Hind, "Mukta Vaani", Gautami, "Kohinoor Devanagari", sans-serif;`;

const marathiStyles = {
  sansRegular: `
    ${marathiFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${marathiFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  NEPALI
 */
const nepaliFontFamily = `font-family: "Noto Sans Devanagari", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const nepaliStyles = {
  sansRegular: `
    ${nepaliFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${nepaliFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  PUNJABI
 */

const punjabiFontFamily = `font-family: "Noto Sans Gurmukhi", Gautami, "Kohinoor Gurmukhi", sans-serif;`;

const punjabiStyles = {
  sansRegular: `
    ${punjabiFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${punjabiFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  SINHALA
 */
const sinhalaFontFamily = `font-family: "Iskoola Pota BBC", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const sinhalaStyles = {
  sansRegular: `
    ${sinhalaFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${sinhalaFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  TAMIL
 */
const tamilFontFamily = `font-family: Latha, Helmet, Freesans, Helvetica, Arial, sans-serif;`;

const tamilStyles = {
  sansRegular: `
    ${tamilFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${tamilFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  TELUGU
 */
const teluguFontFamily = `font-family: Mallanna, "Noto Sans Telugu", "Hind Guntur", Gautami, "Kohinoor Telugu", sans-serif;`;

const teluguStyles = {
  sansRegular: `
    ${teluguFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
};

/*
 *  THAI
 */
const thaiFontFamily = `font-family: Tahoma, Helmet, freesans, Helvetica, Arial, sans-serif;`;

const thaiStyles = {
  sansRegular: `
    ${thaiFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${thaiFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

/*
 *  TIGRINYA
 */
const tigrinyaFontFamily = `font-family: "Noto Sans Ethiopic", Arial, Verdana, Geneva, Helvetica, sans-serif;`;

const tigrinyaStyles = {
  sansRegular: `
    ${tigrinyaFontFamily}
    ${getFontStyleAndWeight('normal', 400)}
  `,
  sansBold: `
    ${tigrinyaFontFamily}
    ${getFontStyleAndWeight('normal', 700)}
  `,
};

export const afaanoromoo = helmetFontStyles;
export const afrique = helmetFontStyles;
export const amharic = amharicStyles;
export const arabic = nassimFontStyles(nassimArabicFontFamily);
export const azeri = helmetFontStyles;
export const bengali = bengaliStyles;
export const burmese = burmeseStyles;
export const cymrufyw = latinReithFontStyles;
export const gahuza = helmetFontStyles;
export const gujarati = gujaratiStyles;
export const hausa = helmetFontStyles;
export const hindi = hindiStyles;
export const igbo = helmetFontStyles;
export const indonesia = helmetFontStyles;
export const japanese = japaneseStyles;
export const korean = koreanStyles;
export const kyrgyz = helmetFontStyles;
export const marathi = marathiStyles;
export const mundo = latinReithFontStyles;
export const naidheachdan = latinReithFontStyles;
export const nepali = nepaliStyles;
export const news = latinReithFontStyles;
export const pashto = nassimFontStyles(nassimPashtoFontFamily);
export const persian = nassimFontStyles(nassimPersianFontFamily);
export const pidgin = helmetFontStyles;
export const portuguese = latinReithFontStyles;
export const punjabi = punjabiStyles;
export const russian = helmetFontStyles;
export const scotland = latinReithFontStyles;
export const serbian = helmetFontStyles;
export const sinhala = sinhalaStyles;
export const somali = helmetFontStyles;
export const swahili = helmetFontStyles;
export const tamil = tamilStyles;
export const telugu = teluguStyles;
export const thai = thaiStyles;
export const tigrinya = tigrinyaStyles;
export const turkce = latinReithFontStyles;
export const ukchina = chineseFontStyles;
export const ukrainian = helmetFontStyles;
export const urdu = nassimFontStyles(nassimUrduFontFamily);
export const uzbek = helmetFontStyles;
export const vietnamese = helmetFontStyles;
export const weather = latinReithFontStyles;
export const yoruba = helmetFontStyles;
export const zhongwen = chineseFontStyles;
