import "./chinesesitescard.scss"

export interface IChineseSitesCard {
    image:string
}

const ChineseSitesCard = ({image}:IChineseSitesCard) => {
    return(
        <div className="Chinese-Sites-Card">
            <img src={image} alt="" className="img-fluid"/>
        </div>
    );
}

export default ChineseSitesCard;