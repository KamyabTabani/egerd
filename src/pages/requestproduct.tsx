import React, {useState} from "react";
import HeadBanner from "../components/ui/headbanner/headbanner";
import Input from "../components/core/input/input";
import Button from "../components/core/button/button";
import ContributeCard, {IContributeCard} from "../components/ui/contributecard/contributecard";
import AccordionBox, {IAccordion} from "../components/ui/accordion/accordion";

const RequestProduct = () => {
    const [nameValue, setNameValue] = useState("");
    const [countValue, setCountValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [urlValue, setUrlValue] = useState("");
    const contributeCardItems: IContributeCard[] = [
        {image: require("../assets/images/pictures/contributebenefit1.png"), title: "امکان خرید عمده"},
        {image: require("../assets/images/pictures/contributebenefit2.png"), title: "امکان مذاکره"},
        {image: require("../assets/images/pictures/contributebenefit3.png"), title: "خرید از منابع اصلی"},
        {image: require("../assets/images/pictures/contributebenefit4.png"), title: "فاکتور رسمی"},
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
    return (
        <div className="Request-Product pt-5">
            <div className="container">
                <div className="row d-flex flex-lg-row flex-md-column-reverse flex-column-reverse">
                    <div className="col-lg-5 col-12 mb-3">
                        <img src={require("../assets/images/pictures/handshake.png")} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-7 col-12 mb-3 pt-5">
                        <HeadBanner className="mb-4" type={"rounded"}>
                            <span>فرم درخواست کالا</span>
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
                </div>
            </div>
            <div className="container my-4">
                <HeadBanner className="mb-4" type={"rounded"}>
                    <span>مزایای همکاری با ایگرد</span>
                </HeadBanner>
                <div className="row">
                    {
                        contributeCardItems.map((contributeCardItem, index) => {
                            return (
                                <div key={index} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12 mb-3">
                                    <ContributeCard image={contributeCardItem.image} title={contributeCardItem.title}/>
                                </div>
                            );
                        })
                    }
                </div>
                <img src={require("../assets/images/pictures/Main2.png")} alt="" className="img-fluid w-100"/>
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
    )
}

export default RequestProduct