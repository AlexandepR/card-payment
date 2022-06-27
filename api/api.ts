import axios from "axios"
// import { NextApiRequest, NextApiResponse} from "next";


// const instance = axios.create({
//     baseURL: 'https://payments-back.herokuapp.com/',
//     // withCredentials: true,
// })

// export default function getAll( req: NextApiRequest, res: NextApiResponse) {
//     res.json({hello: '', method: req.method})
// }

export const CurrentRateAPI = {
    postPayment(CardNumber: string, ExpDate: string, Cvv: string, Amount: number) {
        // debugger
        const promise = axios.post('https://payments-back.herokuapp.com/payment', {CardNumber: CardNumber, ExpDate: ExpDate, Cvv: Cvv, Amount: Amount});
        return promise;
    }
}

//
//
// type ResponseType<D = {}> = {
//     resultCode: number
//     messages: string[],
//     data: D
// }
//
//