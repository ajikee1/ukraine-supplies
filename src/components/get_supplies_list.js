import React, {useEffect, useState} from 'react';
import {useTable} from 'react-table'
import styled from 'styled-components'
import axios from "axios";

const Styles = styled.div`
  table {
    color: black;
    background-color: white;
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({columns, data}) {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})
    // Render Data Table UI
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup
                        .headers
                        .map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row
                            .cells
                            .map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

function GetAllNeededSupplies() {

    const [needsData, setNeedsData] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('/api/getNeeded/')
            .then(response =>
                setNeedsData(response.data));

    }, []);

    console.log(needsData);

    const data =needsData;

    const columns = [
        {
            Header: 'ITEM ID',
            accessor: 'need_id'
        }, {
            Header: 'ITEM NAME',
            accessor: 'needed_item_name'
        }, {
            Header: 'DESCRIPTION',
            accessor: 'need_description'
        }, {
            Header: 'QUANTITY',
            accessor: 'needed_quantity'
        },
        {
            Header: 'COLLECTION STATUS',
            accessor: 'collection_status'
        }
    ]
    return (
        <Styles>
            <Table
                data={data}
                columns={columns}
            />
        </Styles>
    )
}

export default GetAllNeededSupplies;