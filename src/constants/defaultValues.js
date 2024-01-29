/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = "menu-default";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "en";
export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" },
  { id: "enrtl", name: "English - RTL", direction: "rtl" },
];

export const searchPath = "/app/pages/search";
export const servicePath = "https://api.coloredstrategies.com";

/* 
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/
export const themeColorStorageKey = "__theme_color";
export const isMultiColorActive = true;
export const isDarkSwitchActive = true;
export const defaultColor = "light.purple";
export const defaultDirection = "ltr";
export const themeRadiusStorageKey = "__theme_radius";
export const isDemo = true;

/**
 * Date Format
 */
export const DATA_FORMAT = "YYYY-MM-DD hh:mm";
export const DATA_FORMAT_WITH_TIME = "YYYY/MM/DD hh:mm";
export const DATA_FORMAT_WITH_SECOND = "YYYY/MM/DD hh:mm:ss";
export const DATA_FORMAT_WITHOUT_TIME = "YYYY/MM/DD";

/**
 * Types of table items
 */
export const TABLE_ITEM_TYPES = {
  date: "date",
  text: "text",
  number: "number",
  boolean: "boolean",
};

