import "./contributecard.scss"

export interface IContributeCard {
    image:string
    title:string
}

const ContributeCard = ({image,title}:IContributeCard) => {
    return(
        <div className="Contribute-Card">
            <img src={image} className="img-fluid" alt=""/>
            <span>{title}</span>
        </div>
    );
}
export default ContributeCard