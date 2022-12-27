
export const emailValidator = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email)
}

export const passwordValidator = password => {
    const passwordRegex = /^\d+$/;
    return passwordRegex.test(password)
}