import {MouseEventHandler} from "react";

export interface WithClick<T extends  Element> {
  onClick?: MouseEventHandler<T>
}
