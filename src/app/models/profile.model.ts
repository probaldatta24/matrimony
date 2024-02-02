export interface profile{
    id:string,
    name: string,
    images: image[],
    age: number ,
    height: string,
    caste: string,
    motherTongue: string,
    education: string,
    profession: string,
    address: string,
}
export interface image{
    url:string
}