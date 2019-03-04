import { Component } from "vue";

export interface ILogoComponent{
  name: string,
  component: Component
}

export interface ILogoComponentItemList {
  [key: string]: Component
}
