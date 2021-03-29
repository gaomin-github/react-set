import React from 'react';

import Loadable from 'react-loadable';

export const WikiEntry=Loadable({
    // loader:()=>import('$components/wiki-entry/wikiEntry'),
    loader:()=>import('$components/wiki-entry/index'),

    loading:()=>null,
    render:loaded=>{
        
        const Com=loaded.default;
        return <Com/>
    }
})

// export const DocEntry=Loadable({
//     loader:()=>import('$components/doc-entry'),
//     loading:()=>null,
//     render:loaded=>{
//         const Com=loaded.default;
//         return <Com/>
//     }
// })

export default{
    WikiEntry,
    // DocEntry
}

