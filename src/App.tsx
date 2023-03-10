import React, {useState} from 'react';
import './App.scss';
import HeadBanner from "./components/ui/headbanner/headbanner";
import BuyBenefitCard, {IBuyBenefitCard} from "./components/ui/buybeneficard/buybenefitcard";
import Input from "./components/core/input/input";
import Button from "./components/core/button/button";
import ChineseSitesCard from "./components/ui/chineesesitescard/chinesesitescard";
import Slider from "./components/ui/slider/slider";
import AccordionBox, {IAccordion} from "./components/ui/accordion/accordion";

function App() {
    const buyBenefitCardItems: IBuyBenefitCard[] = [
        {image: require("./assets/images/pictures/buybenefit1.png"), title: "امکان دریافت نمونه محصول"},
        {image: require("./assets/images/pictures/buybenefit2.png"), title: "مذاکره"},
        {image: require("./assets/images/pictures/buybenefit3.png"), title: "حمل اکسپرس"},
        {image: require("./assets/images/pictures/buybenefit4.png"), title: "پیدا کرئن تولید کننده معتبر"},
    ]
    const chineseSiteItems: JSX.Element[] = [
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite1.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite2.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite3.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite4.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite1.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite2.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite3.png")}/>,
        <ChineseSitesCard image={require("./assets/images/pictures/chineesesite4.png")}/>,
    ]
    const accordionItems: IAccordion[] = [
        {
            title: 'مزایای همکاری با ایگرد',
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.\n" +
                "                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی\n" +
                "                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه\n" +
                "                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری\n" +
                "                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\n" +
                "                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\n" +
                "                        وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی\n" +
                "                        اساسا مورد استفاده قرار گیرد."
        }, {
            title: 'ارائه فاکتور رسمی',
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.\n" +
                "                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی\n" +
                "                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه\n" +
                "                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری\n" +
                "                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\n" +
                "                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\n" +
                "                        وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی\n" +
                "                        اساسا مورد استفاده قرار گیرد."
        },
    ]
    const [nameValue, setNameValue] = useState("");
    const [countValue, setCountValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [urlValue, setUrlValue] = useState("");
    return (
        <div className="App">
            <img src={require("./assets/images/pictures/Main.png")} alt="" className="img-fluid w-100"/>
            <div className="container mt-4">
                <div className="row">
                    <HeadBanner className="mb-4" type={"rounded"}>
                        <span>مزایای خرید از چین</span>
                    </HeadBanner>
                    {
                        buyBenefitCardItems.map((buyBenefitCardItem, index) => {
                            return (
                                <div key={index} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12 mb-3">
                                    <BuyBenefitCard image={buyBenefitCardItem.image} title={buyBenefitCardItem.title}/>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-12 mb-3">
                        <HeadBanner className="mb-4" type={"rounded"}>
                            <span>فرم درخواست</span>
                        </HeadBanner>
                        <form>
                            <Input type={"text"} placeholder={"نام کالا"} value={nameValue} setValue={setNameValue}/>
                            <Input type={"number"} placeholder={"تعداد"} value={countValue} setValue={setCountValue}/>
                            <Input type={"text"} placeholder={"وزن هر محصول"} value={weightValue}
                                   setValue={setWeightValue}/>
                            <Input type={"url"} placeholder={"لینک سایت مربوطه"} value={urlValue}
                                   setValue={setUrlValue}/>
                            <div className="row mt-2">
                                <div className="col-lg-6 col-12 mb-3">
                                    <Button type={"primary"}>
                                        افزودن عکس
                                    </Button>
                                </div>
                                <div className="col-lg-6 col-12 mb-3">
                                    <Button type={"secondary"}>
                                        ثبت
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12 mb-3">
                        <div className="h-100 w-100 rounded bg-dark">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <HeadBanner className="mb-4" type={"rounded"}>
                    <span>سایت های معتبر چینی</span>
                </HeadBanner>
                <Slider items={chineseSiteItems}/>
            </div>
            <div className="container mt-5 mb-5">
                {
                    accordionItems.map((accordionItem, index) => {
                        return (
                            <AccordionBox key={index} title={accordionItem.title} body={accordionItem.body}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;
