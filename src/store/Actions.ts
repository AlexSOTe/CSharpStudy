import { GET_NAME } from './Types';
let id = 0;
export function SetName(name: string) {
  return {
    type: GET_NAME,
    name,
    id: id++
  }
}
