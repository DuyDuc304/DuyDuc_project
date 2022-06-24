export const setDayTime = (data: any) => {
    console.log(data)
    return {
        type: "Date/setDate",
        payload: data,
    }
}