

function phoneFormatter(phone){
    return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6, 10)}`
}

export default phoneFormatter;