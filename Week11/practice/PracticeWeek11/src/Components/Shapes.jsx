import "./shapes.css";
export const Square = () => {
    return (
        <>
        <div className="square">

        </div>
        </>
    );
};
export const Reactangle = () => {
    return (
        <>
        <div className="reactangle">
        </div>
        </>
    );
};


export const Circle = () => {
    return (
        <>
        <div className="circle">
            
        </div>
        </>
    );
};
export const GeneralShape=({className="circle" })=>{

    return(
        <>
         <div className={`${className}`}>
            
            </div></>
    )
}