import { useState, useRef } from "react";
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonSlide,
    IonSlides,
} from "@ionic/react";
import { add, ellipsisVerticalOutline, pencilSharp, apps, list } from 'ionicons/icons';
import "./Gym.css";
import Exercises from "./Exercises";
import Header from "../../components/Header";
import { LayoutType, SegmentType } from "../../Enums";

const Gym: React.FC = () => {
    const slidesRef = useRef<HTMLIonSlidesElement>(null);
    const [currentSegment, setCurrentSegment] = useState("exercises");
    const [currentLayout, setCurrentLayout] = useState(LayoutType.List);

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

    const onLayoutToggleClick = () => {
        if (currentLayout === LayoutType.List) {
            setCurrentLayout(LayoutType.Categories);
        }
        else {
            setCurrentLayout(LayoutType.List);
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
                        <Exercises layout={currentLayout} />
                    </IonSlide>
                    <IonSlide>
                        Stretches Page
                    </IonSlide>
                </IonSlides>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={ellipsisVerticalOutline} />
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonFabButton color="primary" onClick={onLayoutToggleClick}><IonIcon icon={currentLayout === LayoutType.Categories ? list : apps} /></IonFabButton>
                        <IonFabButton color="primary"><IonIcon icon={pencilSharp} /></IonFabButton>
                        <IonFabButton color="primary"><IonIcon icon={add} /></IonFabButton>
                    </IonFabList>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Gym;
