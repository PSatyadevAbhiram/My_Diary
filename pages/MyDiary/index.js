import { Fragment } from "react";
import DiaryItem from "../../components/Home/DiaryItem";

function MyDiary() {
    let document;
    async function getDiaryDetails(pickedDate) {
        const response = await fetch(`/api/diary-details?id=${pickedDate}`);
        if (!response.ok) {
            throw new Error(`Cpuld not find the document looking for. ${response.status}`);
        }
        const document = await response.json();
        return document;
    }
    return (
        <Fragment>
            <DiaryItem onDateChange = {getDiaryDetails}/>
        </Fragment>

    )
}

export default MyDiary;