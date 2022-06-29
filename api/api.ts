import axios from "axios"

export const CurrentRateAPI = {
    postPayment(card: string,
                dateKey: string,
                cvv: string, amount: number
    ) {
        const promise = axios.post('https://payments-back.herokuapp.com/payment', {CardNumber:card,
            ExpDate: dateKey,
            Cvv: cvv, Amount: amount
        });
        return promise;
    },
}
