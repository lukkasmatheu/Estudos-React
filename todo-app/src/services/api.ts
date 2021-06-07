import axios, { AxiosResponse } from 'axios';
import { taskProperties } from '../models/TaskModel';

const path = `http://localhost:5000/task`;

export interface taskResponse {
    data: taskProperties[];
}

export const getTasks = (): Promise<AxiosResponse<taskResponse>> => {
    return axios.get(path);
};

export const postTask = (task, description, date): Promise<AxiosResponse<taskResponse>> => {
    return axios.post(path, { task, description, date, complete: false });
}
