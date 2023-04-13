export interface Person {
    firstName: string;
    lastName: string;
};

export interface Props {
    text: string; // can be any type of prop
    ok?: boolean; // ? -> means that this property is optional. You are not obliged to init this variable in 'TextField' object
    i?: number;
    fn?: (bob: string) => string; // you can return any type: void, number, etc.
    obj: { // this is object
        f1: string
    };
    person: Person; // obj with type of another interface above.
};

export interface TextNode {
    text: string
};

export interface Counters {
    _counter?: number;
    _counter1?: number;
}