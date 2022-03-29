import React from 'react';
import axios from "axios";

export default class SuppliesTable extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            dataLoaded: false,
            data: []
        }
    }

    async getResponse(){
        const res =  await axios.get('/api/getNeeded/');
        this.setState({data: res.data});
    }

    componentDidMount() {
        this.getResponse().then();
    }

    render() {
        return(
            <table>
                <thead>
                <tr>
                    <th>ITEM ID</th>
                    <th>ITEM NAME</th>
                    <th>DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>COLLECTION STATUS</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(( item, index ) => {
                    return (
                        <tr key={item.need_id}>
                            <td>{item.need_id}</td>
                            <td>{item.needed_item_name}</td>
                            <td>{item.need_description}</td>
                            <td>{item.needed_quantity}</td>
                            <td>{item.collection_status}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        )
    }

}