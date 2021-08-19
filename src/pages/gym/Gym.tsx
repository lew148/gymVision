import { useState, useRef, HtmlHTMLAttributes } from "react";
import {
    IonContent,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonSlide,
    IonSlides,
} from "@ionic/react";
import "./Gym.css";
import Exercises from "./exercises";
import Header from "../../components/Header";

// Segment Types
enum SegmentType {
    Exercises,
    Stretches
}

const Gym: React.FC = () => {
    const slidesRef = useRef<HTMLIonSlidesElement>(null);
    const [currentSegment, setCurrentSegment] = useState("exercises");

    const changeSegment = (type: SegmentType) => {
        if (slidesRef.current == null) return;

        if (type === SegmentType.Stretches) {
            setCurrentSegment("stretches");
            slidesRef.current.slideTo(1);
        } else {
            setCurrentSegment("exercises");
            slidesRef.current.slideTo(0);
        }
    }

    const onSegmentTap = (e: any) => {
        if (e.detail.value === "stretches") {
            changeSegment(SegmentType.Stretches);
        } else {
            changeSegment(SegmentType.Exercises);
        }
    };

    const onSegmentSlide = () => {
        if (slidesRef.current != null) {
            slidesRef.current.getActiveIndex().then(i => {
                if (i === 1) {
                    changeSegment(SegmentType.Stretches);
                }
                else {
                    changeSegment(SegmentType.Exercises);
                }
            })
        }
    }

    return (
        <IonPage>
            <Header title="Gym" />
            <IonContent fullscreen>
                <IonItemDivider sticky>
                    <IonSegment onIonChange={onSegmentTap} value={currentSegment}>
                        <IonSegmentButton value="exercises">
                            <IonLabel>Exercises</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="stretches">
                            <IonLabel>Stretches</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonItemDivider>
                <IonSlides ref={slidesRef} onIonSlideDidChange={onSegmentSlide}>
                    <IonSlide>
                        <Exercises />
                    </IonSlide>
                    <IonSlide>
                        Stretches Page
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default Gym;
