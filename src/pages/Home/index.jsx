import {Carousel} from "antd";
import "./style.css"
import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img3 from "../../assets/img3.jpg"
import Img4 from "../../assets/img4.jpg"
// import Img5 from "../../assets/img5.jpg"
import Part1 from "../../assets/part1.png"
import Part2 from "../../assets/part2.png"
import Part3 from "../../assets/part3.png"
import Part4 from "../../assets/part4.png"
import Part5 from "../../assets/part5.png"
import Part6 from "../../assets/part6.png"
import Part7 from "../../assets/part7.png"
import Part8 from "../../assets/part8.png"

export default function Home() {
    return (
        <>
            <div className='carousel-container'>
                <Carousel>
                    <div className='carousel-item'>
                        <img className={'carousel-image'} src={Img1} alt={'carousel-image'}/>
                    </div>
                    <div className='carousel-item'>
                        <img className={'carousel-image'} src={Img2}/>
                    </div>
                    <div className='carousel-item'>
                        <img className={'carousel-image'} src={Img3}/>
                    </div>
                    <div className='carousel-item'>
                        <img className={'carousel-image'} src={Img4}/>
                    </div>
                </Carousel>


            </div>
            <div className={'partners'}>
                <h1 style={{marginBottom: "10px"}}>
                    Hamkorlarimiz
                </h1>
                <div className={'partner-images'}>


                    <div>
                        <img src={Part1} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part2} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part3} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part4} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part5} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part6} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part7} className={'partner-image'}/>
                    </div>
                    <div>
                        <img src={Part8} className={'partner-image'}/>
                    </div>
                </div>
            </div>
        </>

    )
}