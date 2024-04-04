// 11-misol

// let promptt = prompt("Enter your number...")
// const total = (...params) =>{
//     let arr = Array.from(String(promptt), Number)
//     let total_arr = 0
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         total_arr += arr[i]
//     }
//     console.log(total_arr)
// }
// total()







// 12-misol

// const numbers = (...params) =>{
//     let total = 0
//     for (let i = 0; i < params.length; i++) {
//         total += params[i]
//     }
//     console.log(total);
//     let arr = Array.from(String(total), Number)
//     console.log(arr);
// }
// numbers(2,4,6,8,9)






// 13-misol

// function IsPalidrom(params) {
//     let type = typeof params
//     if (type === "Number") {
//         let arr = Array.from(params.toString(), Number).reverse()
//         let new_number = Number(arr.join(""))
//         if (params === new_number) {
//             return "palidrome"
//         } else {
//             return "palidrome emas"
//         }
        
//     }else if (type === "string") {
//         let arr = params.split("").reverse()
//         let new_str = arr.join("")
//         if (params === new_str) {
//             return "palidrom"
//         }else{
//             return "palidrom emas"
//         }
//     }else{
//         return "type xato"
//     }
// }
// console.log(IsPalidrom(0))







// 14-misol

// 1-usul

// const obj = {a:1, b:22}
// let total = 0
// let total_arr = 0
// let changeArray = Object.values(obj)
// for (let i = 0; i < changeArray.length; i++) {
//     total += changeArray[i]
// }
// let arr = Array.from(String(total), Number)
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     total_arr += arr[i]
// }
// console.log(`${total_arr} valuelar yigindisini arryga ajratib shu arrayni yigindis`);
// console.log(`${total} values yigindisi`)
// console.log(changeArray);



// 2-usul

// const obj = {a:1, b:22}
// let total = 0
// let total_arr = 0
// for (const value in obj) {
//     total += obj[value]
// }
// console.log(total)
// let arr = Array.from(String(total), Number)
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     total_arr += arr[i]
// }
// console.log(total_arr)








// 15-misol

// let str = "Akrom"
// let new_str = str.toLocaleLowerCase().trim()
// let letters = ["a", "o", "i", "o'", "u", "e"]
// let count = 0
// for (let i = 0; i < new_str.length; i++) {
//     if (letters.includes(new_str[i])) {
//         count ++
//     }
// }
// console.log(`${str} so'zida ${count} ta unli harif bor`)










// 16-misol

function getInitialOdds(n) {
    let arr = []
    for (let i = 1; i < n*2; i++) {
        if (i % 2 == 0) {
            
        }else {
            arr.push(i)
        }
    }
    console.log(arr)
}
getInitialOdds(3)
