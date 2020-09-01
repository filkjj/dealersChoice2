import React from "react"



const MiddleCols = ({champName,selectDisplay})=>{
    return(<>
        <div className='middleCols' onClick={()=>selectDisplay('splashes')}>{champName} splashes</div>
        <div className='middleCols'>{champName} </div>
        <div className='middleCols' onClick={()=>selectDisplay('abilities')}>{champName} abilities</div>
        </>
    )
}


export default MiddleCols