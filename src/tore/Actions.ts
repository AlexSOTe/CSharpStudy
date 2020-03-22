/// 用户触发的action

import { GETNAME } from '../Constants/Constants';

export interface IGETNAMEACTION {
  name: string;
  type: GETNAME;
}
export type ModifyAction = IGETNAMEACTION;
/**
 * dispatch将action数据（name）传送到store
 * @param name
 */
export const SetName = (name: string): IGETNAMEACTION => {
  return {
    type: GETNAME,
    name
  }
}
