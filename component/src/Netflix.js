import React from "react";
import Card from "./Card";

function Netflix(){
return(
    <div className="grid-container">
        <Card  imgsrc="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYryfSD2xXO3xKEPb6TJdccJ1pXIto2FWmwlmeiLno1w8qmKs-rieQp78QaimZFfnNFjgf8zqVT8PyORowGvzsUIzqE.jpg?r=75b"
        title="Friends"
        sname="Netflix series"
        link="https://www.netflix.com/in/title/70153404"
        />
        <Card  imgsrc="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRSGrqLtrmo0Hn9wN2wqkfifrcQC-H9Zi_RpLjvSbRe5lY8_4id5kC9qWk24bs3fNzCTpRf4fo4jCKdleJPwZ1mYyw74ox2L5Czae7nr2YUyFaVpHj0DNXnWAvGD.jpg?r=393"
        title="DARK"
        sname="Netflix series"
        link="https://www.netflix.com/in/title/80100172"
        />
    </div>
);

}

export default Netflix;