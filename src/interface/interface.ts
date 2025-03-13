export interface Imove {
    id: string | number,
    namemove: string,
    describe: string,
    linkvideo: string,
    image: string,
    categorys:string,

    view: number,
}
export type Ifrom = Omit<Imove, "id">