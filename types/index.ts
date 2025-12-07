import { FormEvent, ReactNode } from "react";

export interface FormData {
    name: string;
    email: string;
    message: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export interface HeroSectionTypes {
    children:ReactNode
}
export interface ThemeButtonTypes { 
    children:ReactNode, 
    onButtonClick:(e: FormEvent)=>void, 
    style?:string
}