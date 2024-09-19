import Title from "../Title/Title";
import { useTable , useGlobalFilter, useSortBy, usePagination , } from 'react-table'
import { COLMUNS } from "./columns";
import { BillysShuntData } from "../../../server/تحويلة بيليات";
import './BillysShunt.css'
import { useState } from "react";

export default function BillysShunt() {

    const [pageNumber,setPageNumber] = useState(10)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        page,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        pageCount,
    } = useTable(
    {
        data: BillysShuntData,
        columns: COLMUNS,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
    );

    state.pageSize = pageNumber
    
    return (
        <>
            <Title title={'تحويلة بيليات'}/>
            <div style={{margin: '30px 5px'}}>
                <table {...getTableProps()} className="BillysShuntTable">
                    <thead >
                        {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                key={index}
                            >
                                {column.isSorted ? (
                                <span style={{ fontSize: "12px" }}>
                                    {" "}
                                    {!column.isSortedDesc ? (
                                    <i className="bi bi-arrow-up"></i>
                                    ) : (
                                    <i className="bi bi-arrow-down"></i>
                                    )}{" "}
                                </span>
                                ) : (
                                <i
                                    className="bi bi-arrow-up"
                                    style={{ opacity: "0" }}
                                ></i>
                                )}
                                <span style={{ marginLeft: "5px" }}>
                                {column.render("Header")}
                                </span>
                            </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={index}>
                            {row.cells.map((cell, index) => (
                                <td {...cell.getCellProps()} key={index}>
                                {cell.render("Cell")}
                                </td>
                            ))}
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


function TableHeader() {

}

function TableFooterControal() {
    return (
        <div>
            
        </div>
    )
}