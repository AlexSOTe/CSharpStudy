import { GETNAME } from './Types';

export interface IGETNAMEACTION {
  type: GETNAME;
  [key: string]: any;
}
export type ModifyAction = IGETNAMEACTION;
export const SetName = (name: string): IGETNAMEACTION => {
  return {
    type: GETNAME
  }
}
