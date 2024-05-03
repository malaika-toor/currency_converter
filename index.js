#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    Pound: 0.80,
    KuwaitiDinar: 0.31,
    INR: 83.43,
    PKR: 278.25,
    Taka: 109.688,
    Turkishlira: 32.45,
    ChineseYuan: 7.25,
    JapaneseYen: 156.5199,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        "type": 'list',
        choices: ['USD', 'EUR', 'Pound', 'KuwaitiDinar', 'INR', 'PKR', 'Taka',
            'Turkishlira', 'ChineseYuan', 'JapaneseYen']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        "type": 'list',
        choices: ['USD', 'EUR', 'Pound', 'KuwaitiDinar', 'INR', 'PKR', 'Taka',
            'Turkishlira', 'ChineseYuan', 'JapaneseYen']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        "type": 'number',
    },
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
