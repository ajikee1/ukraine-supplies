import React from 'react';
import {useForm} from "react-hook-form";

import logo from './images/logo.png';
import './css/form.css';
import axios from "axios";

export default function AddNeededSupplies() {

    const {register, handleSubmit} = useForm();

    function onSubmit(data) {
        sendFormDataToServer(data);

    }

    function sendFormDataToServer(data) {
        axios.post('/api/addNeed/', data).then((response) => {
            console.log(response.data);
        });
    };

    return (
        /* handleSubmit" will validate your inputs before invoking "onSubmit */
        <div>
            <h2 align={"center"} style={{color: "white"}}>ENTER THE DETAILS OF THE ITEMS IN NEED</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ITEM NAME <input type="text" {...register("needed_item_name")} /></label>

                <label>DESCRIPTION <textarea {...register("need_description")} /></label>

                <label>QUANTITY <input type="number"  {...register("needed_quantity")} defaultValue="0"/></label>

                <label>
                    COLLECTION STATUS:
                    <select {...register("collection_status")}>
                        <option value="IN_NEED">IN NEED</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="REQUIREMENT_SATISFIED">REQUIREMENT_SATISFIED</option>
                    </select>
                </label>

                <input type="submit" name="submit_button"/>

            </form>
        </div>
    );
}