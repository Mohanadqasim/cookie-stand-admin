import React from "react";
import data, { hardCode, hardCodeValues } from "@/Data";
import Footer from "./Footer";
import { FiTrash } from "react-icons/fi";

export default function Table(props) {
    // Function to handle delete operation
    function handleDelete(index) {
        let newdata = props.formData.filter((item, idx) => idx !== index);
        props.setFormData(newdata);
    }

    // Function to calculate sum of elements in an array
    function rowTotals(arr) {
        let sum = 0;
        arr.forEach((num) => {
            sum += num;
        });
        return sum;
    }

    // Function to get the total sum for the footer
    function getTotalSum() {
        return props.formData.reduce((total, item) => {
            return total + rowTotals(hardCodeValues);
        }, 0);
    }

    if (props.formData.length === 0) {
        return <h2>No Cookie Stands Available</h2>;
    } else {
        return (
            <>
                <div className="mt-10">
                    <table className="table-fixed">
                        <thead className="content-center p-2 bg-green-500 border">
                            <tr>
                                <th className="w-1/2 px-4 py-2">Location</th>
                                
                                
                                {hardCode.map((hour) => (
                                    <th key={hour} className="w-1/2 px-4 py-2">
                                        {hour}
                                    </th>
                                ))}
                                <th className="w-1/2 px-4 py-2">Totals</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                            {props.formData.map((item, index) => (
                                <tr key={item.loc} className="p-2 bg-green-400 border border-slate-600">
                                    <td className="flex items-center w-1/2 px-4 py-2 space-x-4">
                                       
                                       
                                        <span className="mr-2">{item.loc}</span>
                                        <button onClick={() => handleDelete(index)}>
                                            <FiTrash />
                                        </button>
                                    </td>
                                    
                                    
                                    {hardCodeValues.map((v) => (
                                        <td key={v} className="w-1/2 px-4 py-2">
                                            {v}
                                        </td>
                                    ))}
                                    <td className="w-1/2 px-4 py-2">
                                        
                                        {rowTotals(hardCodeValues)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="p-2 bg-green-500 border border-slate-600">
                            <tr>
                                <th scope="row">Totals</th>
                               
                                {hardCodeValues.map((v) => (
                                    <td key={v} className="w-1/2 px-4 py-2">
                                        {v * props.formData.length}
                                    </td>
                                ))}
                                <td className="w-1/2 px-4 py-2">
                                    
                                    {getTotalSum()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </>
        );
    }
}
