import "./buybenefitcard.scss"

export interface IBuyBenefitCard {
    image:string
    title:string
}

const BuyBenefitCard = ({image,title}:IBuyBenefitCard) => {
    return(
        <div className="Buy-Benefit-Card">
            <img src={image} className="img-fluid" alt=""/>
            <span>{title}</span>
        </div>
    );
}

export default BuyBenefitCard;