import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import DrawTable from "../components/tables/DrawTable";
import jsPDF from "jspdf";
import LoadingPage from "../components/loading/LoadingPage";
function Draw({ filteredApplicants = "[]" }) {

    const [loading, setLoading] = useState(false);
    const applicantsArray = JSON.parse(filteredApplicants);
    const [open, setopen] = useState(false);

    const totalEnteries = () => {
        setopen(!open);
    };

    const formattedApplicants = applicantsArray
        .map((applicant) => {
            return `Name: ${applicant.applicant_name}, CNIC: ${applicant.cnic_no},Phone: ${applicant.mobile}`;
        })
        .join("\n");
    const pdfGenerator = () => {
        setLoading(true)
        const pdf = jsPDF("p", "pt");
        pdf.text(20, 20, formattedApplicants);
        pdf.save("generated.pdf");
        setLoading(false)
    };
    return (
       
        <div className=" ">
             {
            loading ? <LoadingPage /> : (
                <div>

                </div>
            )
        }
           
        </div>
    );
}

export default Draw;
