import React from "react";
import Card from "./Card";

const Amazon = () =>{
    return(
        <div className="grid-container">
        <Card imgsrc="https://m.media-amazon.com/images/I/91MXjB+vrGL._AC_UY218_.jpg"
        title="El Presidente- Season 1"
        sname="Amazon series"
        link="https://watch.amazon.com/watch?asin=B08BYYBHY3"
        />
        <Card imgsrc="https://m.media-amazon.com/images/I/91A+bvapNUL._AC_UY218_.jpg"
        title="The Marvelous Mrs. Maisel - Season 3"
        sname="Amazon series"
        link="https://www.amazon.com/Marvelous-Mrs-Maisel-Season-Featurette/dp/B0875Y1BWH/ref=sr_1_7?brr=1&dchild=1&qid=1606900400&rd=1&s=instant-video&sr=1-7"
        />
        </div>
    );
}
export default Amazon;