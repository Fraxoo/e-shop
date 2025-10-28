
import "../styles/loading.css";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";


export default function Loading() {
    return(
    <div className="loading-container">
        <Lottie
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ height: 120, width: 120 }}
        />
    </div>
    )
}