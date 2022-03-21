export const NAME = 'nameAction'
export const EMAIL = 'emailAction'
export const PHONE = 'phoneAction'
export const ROLE = 'roleAction'

export const roleAction = role =>(
    {
        type: ROLE,
        payload: role
    })

export const nameAction = name =>(
    {
        type: NAME,
        payload: name
    })

export const emailAction = email => (
    {
        type: EMAIL,
        payload: email
    })

export const phoneAction = phone => (
    {
        type: PHONE,
        payload: phone
    })

