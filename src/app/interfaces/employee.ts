export interface Employee {
    id: number,
    person: Person,
    position: Position,
    salary: number
}

export interface Person {
    id: string,
    name: string, 
    lastname: string,
    address: string,
    cellphone: string,
    cityname: string
}

export interface Position {
    id: number,
    name: string
}

export interface ResultData {
    operation: string,
    result: string,
    cause: string,
    data: any
}