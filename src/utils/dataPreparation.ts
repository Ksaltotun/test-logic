import { CourseItem, TagStruct } from "./types";

export function makeTagsList(tag: CourseItem[]) {
    const tagList: string[] = []
    tag.forEach((element: CourseItem) => {
        tagList.push(...element.tags)
    });
    const setOfTag:TagStruct[] = [{
        name: 'Все темы',
        id: null
    }]
   
    return [...setOfTag, ...Array.from(new Set(tagList)).map(el=>({
        name: el,
        id: el
    }))]
}




