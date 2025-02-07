import { Link } from "react-router-dom";
import Footer from "./SM_footer";
import StyleReset from "../components/StyleReset";
import ScrollingBackground from "../components/ScrollingBackground";
import Card from "./SM_card";

export default function () {

    return (
        
        <div>
            {/* <StyleReset> */}
                <ScrollingBackground/>
                <h1><Link to="/Home">Home</Link></h1>
                <Footer text={"William Busch"}/>
                <div style={{marginTop: "25px", marginBottom: "25px",}}>
                    <Card />
                    <Card />
                </div>
                <Footer text={"William Busch"}/>
            {/* </StyleReset> */}
        </div>
    )
}