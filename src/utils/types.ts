export interface CourseItem extends CardProps {
    tags: string[]
}

export type TagStruct = {
    name: string,
    id: string | null
}

export type AppProps = {
    data: CourseItem[];
}

export type CardProps = {
    name: string,
    id: string,
    image: string,
    bgColor: string,
}

export type TagsButton = {
    tag: TagStruct,
    action: Function,
    state: boolean
}

export type DataState = {
    isLoading: boolean,
    data: CourseItem[]
}

