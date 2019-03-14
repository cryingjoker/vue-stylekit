export interface IRGBA {
  red: number,
  green: number,
  blue: number,
  alpha: number,
}
export interface IColorListItem {
  code_variable_name: String,
  label: String,
  value: String,
  hex? : String,
  translate_name? : String,
  rgba? : IRGBA,
}

export interface IColorList {
  [index: number]: IColorListItem;
}
