import axios, { AxiosResponse } from 'axios';

const path = `http://localhost:3000/task`;

export interface taskProperties {
    id: number;
    task: string;
    description: string;
    date: string;
    complete: boolean;
}

export interface taskResponse {
    task: taskProperties[];
}

export const getTasks = (): Promise<AxiosResponse<taskResponse>> => {
    return axios.get(path);
};

export const postTask: taskProperties = (id, task, description, date): Promise<AxiosResponse<taskResponse>> => {
    const data = {
        id: id,
        task: task,
        description: description,
        date: date,
        complete: false
    }
    return axios.post(path, data);
}
