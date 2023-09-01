import React, {useMemo, useState} from 'react'
import data from '../data.json'
import {AgGridReact} from 'ag-grid-react';
import {BiMoviePlay} from 'react-icons/bi'
import 'ag-grid-enterprise'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// simple component 
const simpleComp = (p) => {
    return (
        <div style={{textAlign:'center'}}>
            <a href={`http://google.com/search?q=${encodeURIComponent(p.data.movie_title)}`} target="_blank" rel="noopener noreferrer">
                <BiMoviePlay style={{fontSize: '24px'}} />
            </a>
        </div >
    )
}

function CustomeTable() {
    const [rowData] = useState(data);

    // const columnName = Object.keys(data[0]).map((obj, index) => {
    //     return {field: obj}
    // })
    // columnName.splice(1, 0, {field: 'link for movie'});
    // const columnNameWithLink = columnName.map(obj => {
    //     if (obj.field === 'link for movie') {
    //         return {field: obj.field, cellRenderer: simpleComp}
    //     }
    //     else {
    //         return {field: obj.field}
    //     }
    // })
    // const [columnDefs] = useState(columnNameWithLink);

    // ################################################optimized code#################################################
    // ############################################################################################################### 
    const columnDefs = useMemo(() => {
        const newColumnDefs = Object.keys(data[0]).map((field) => ({
            field,
        }));
        // costum cell component... we can also use cellrendererselectore instead cell renderer
        newColumnDefs.splice(1, 0, {field: 'link for movie', cellRenderer: simpleComp});
        return newColumnDefs;
    }, []);

    const defaultColdef = useMemo(() => ({
        sortable: true,
        filter: true,
        // row grouping
        enableRowGroup: true,
    }), [])

    return (
        <div className="ag-theme-alpine-dark" style={{height: 800, width: 1890}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                animateRows={true}
                defaultColDef={defaultColdef}
                // row grouping
                rowGroupPanelShow='always'
            >
            </AgGridReact>
        </div>
    );
}

export default CustomeTable