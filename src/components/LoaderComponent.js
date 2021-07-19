import React from 'react'

function LoaderComponent(props) {

    if(props.isLoading){
        return (
       
            <div className={'loaderDiv'}>
                <img style={{width:'10vw'}}  src={`${process.env.PUBLIC_URL}/loader.gif`} />
                </div>
      
   )
    }else{
        return null;
    }
    
}

export default LoaderComponent
