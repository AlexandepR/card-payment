import axios from "axios"
import { NextApiRequest, NextApiResponse} from "next";

//
// export default function getAll( req: NextApiRequest, res: NextApiResponse) {
//     res.json({hello: '', method: req.method})
// }
//
//
// type ResponseType<D = {}> = {
//     resultCode: number
//     messages: string[],
//     data: D
// }
//
//
// export const CurrentRateAPI = {
//     postPayment(title: string) {
//         const promise = axios.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title});
//         return promise;
//     }
// }