/// �û�������action

import { GETNAME } from '../Constants/Constants';

export interface IGETNAMEACTION {
  name: string;
  type: GETNAME;
}
export type ModifyAction = IGETNAMEACTION;
/**
 * dispatch��action���ݣ�name�����͵�store
 * @param name
 */
export const SetName = (name: string): IGETNAMEACTION => {
  return {
    type: GETNAME,
    name
  }
}
