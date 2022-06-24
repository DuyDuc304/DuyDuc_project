
//innit defau value
var Service: any = []
var Device: any = []
var OrderNumber: any = []
var Report: any = []
var RoleUser: any = []
var AccountUser: any = []
var DiaryUser: any = []
//call api bằng json server
// cd Json-server and npm start 
var APIService = '  http://localhost:3000/Service'
var APIDevice = 'http://localhost:3000/Device'
var APIOrderNumber = 'http://localhost:3000/OrderNumber'
var APIReport = 'http://localhost:3000/Report'
var APIRoleUser = 'http://localhost:3000/Role'
var APIAccountUser = 'http://localhost:3000/Account'
var APIDiaryUser = 'http://localhost:3000/Dairy'

//load data từ server gán = Service
const fetchItemServiceData = async () => {
    const data: any = await fetch(APIService).then(function (response) {
        return response.json()
    })
    Service = data.map((item: any) => (
        Service.push(item)
    ))
}
fetchItemServiceData()
//load data từ server gán = Device
const fetchItemDeviceData = async () => {
    const data: any = await fetch(APIDevice).then(function (response) {
        return response.json()
    })
    Device = data.map((item: any) => (
        Device.push(item)
    ))
}
//load data từ server gán = OrderNumber
fetchItemDeviceData()
const fetchItemOrderNumberData = async () => {
    const data: any = await fetch(APIOrderNumber).then(function (response) {
        return response.json()
    })
    OrderNumber = data.map((item: any) => (
        OrderNumber.push(item)
    ))
}
fetchItemOrderNumberData()

//load data từ server gán = Report
const fetchItemReportData = async () => {
    const data: any = await fetch(APIReport).then(function (response) {
        return response.json()
    })
    Report = data.map((item: any) => (
        Report.push(item)
    ))
}
fetchItemReportData()

//load data từ server gán = RoleUser
const fetchItemRoleUserData = async () => {
    const data: any = await fetch(APIRoleUser).then(function (response) {
        return response.json()
    })
    RoleUser = data.map((item: any) => (
        RoleUser.push(item)
    ))
}
fetchItemRoleUserData()

//load data từ server gán = AccountUser
const fetchItemAccountUserData = async () => {
    const data: any = await fetch(APIAccountUser).then(function (response) {
        return response.json()
    })
    AccountUser = data.map((item: any) => (
        AccountUser.push(item)
    ))
}
fetchItemAccountUserData()

//load data từ server gán = DiaryUser
const fetchItemDiaryUserData = async () => {
    const data: any = await fetch(APIDiaryUser).then(function (response) {
        return response.json()
    })
    DiaryUser = data.map((item: any) => (
        DiaryUser.push(item)
    ))
}
fetchItemDiaryUserData()



// value innitState
const innitState = {
    User: {
        UserName: "duc",
        Name: "Nguyễn Duy Đức",
        Phone: "0379439568",
        Email: "duc304@gmail.com",
        Password: "123",
        Role: "Admin",
        Avatar: "https://tinhte.vn/store/2016/10/3893837_1_1.jpg"
    },
    Device,
    Service,
    OrderNumber,
    Report,
    RoleUser,
    AccountUser,
    DiaryUser
}
console.log(innitState)

const rootReducer = (state: any = innitState, action: any) => {
    switch (action.type) {
        case "Login": {
            return state
        }
        default:
            return state;
    }

}
export default rootReducer
