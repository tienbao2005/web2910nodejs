export interface Icategory {
    id: string | number,
    namecategory: string,
    image: string,
}
export type IfromCategory = Omit<Icategory, "id">