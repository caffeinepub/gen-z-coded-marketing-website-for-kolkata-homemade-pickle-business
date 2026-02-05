import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactFormSubmission>>;
    getSubmission(id: bigint): Promise<ContactFormSubmission>;
    submitContactForm(name: string, email: string, message: string): Promise<bigint>;
}
