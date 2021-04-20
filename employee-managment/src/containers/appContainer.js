
import HeaderComponent from "../components/headerComponent";
import ContentComponent from "../components/contentComponent";
import FooterComponent from "../components/footerComponent";

export default function AppContainer() {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}