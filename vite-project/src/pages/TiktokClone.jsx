import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Sidebar from "../components/SideBar";
import TikTokScreen from "../components/TikTokScreen";


export default function () {
    return (
        <>
            <TopBar/>
            <Sidebar />
            <TikTokScreen />
            <BottomBar />
        </>
    )
}