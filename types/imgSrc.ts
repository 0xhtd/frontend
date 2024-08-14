import { Status } from "./enum";
const array:string[] = []
Object.keys(Status).forEach((key)=>{array.push(`/images/${key}.jpg`)});
export const ImgSrc:string[] = array;