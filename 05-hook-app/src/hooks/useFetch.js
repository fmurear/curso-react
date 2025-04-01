import { useEffect, useState } from "react"


const localChace = {}

export const useFetch = ( url ) => {
    
    useEffect(() => {
      getFetch();
    }, [ url ]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async() => {

        if( localChace[url] ){
            console.log('usando caché')
            setState({
                data: localChace[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState();
        const resp = await fetch( url );

        await new Promise( resolve => setTimeout( resolve, 1500 ) );
        console.log(resp);
        if( !resp.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            return;
        }

        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        localChace[url] = data;
    }
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
