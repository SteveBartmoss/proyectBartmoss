import './contenedores.css';

export function DivMain({children}){
    return(
        <div className="div-main">
            {children}
        </div>
    )
}

export function DivRow({children}){
    return(
        <div className="div-row">
            {children}
        </div>
    )
}

export function DivCol({children}){
    return(
        <div className="div-col">
            {children}
        </div>
    )
}

export function DivSection({children}){
    return(
        <div className="div-section">
            {children}
        </div>
    )
}