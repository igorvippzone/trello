import {IBase} from "@/types/root.types";

export enum EnumTaskProperties {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface ITaskResponse extends IBase {
    name: string
    priority?: EnumTaskProperties
    isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
