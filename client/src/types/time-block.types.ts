import {IBase} from "@/types/root.types";

export interface ITimeBlockResponse extends IBase {
    name: string
    color?: string
    duration: number
    order: number
}

export type TypeTimeBlockFormState = Partial<Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>>
