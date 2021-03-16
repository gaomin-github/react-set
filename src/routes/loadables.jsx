import Loadable from 'react-loadable';

export const WikiEntry=Loadable({
    loader:()=>import('../components/wiki-entry'),
    loading:()=>null,
})

export const DocEntry=Loadable({
    loader:()=>import('../components/doc-entry'),
    loading:()=>null,
})

