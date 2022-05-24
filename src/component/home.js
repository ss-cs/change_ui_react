import MyPage from "./mypage";

const Home = ()=>{
    let listData =[
        "He's not the sharpest knife in the drawer",
        "The big building was blazing with lights",
        "Now you must answer some big questions",
        "Get Your Act Together"
    ]

    return(
        listData.map ((value) => (
            <MyPage content = {value} />
        ))
    )
}

export default Home;