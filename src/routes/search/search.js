import { useLocation } from "react-router-dom";
import SearchData from "../../models/searchData";
import "./style.css";

const SearchPage = (props) => {
    const data = SearchData()
    const { state } = useLocation()
    const { Svalue } = state;
    let flag;

    return (
        <div className="searchPage">
            <div className="contents">
                {flag = data.map(el => {
                    if (el.title.includes(Svalue)) {
                        return (

                            <div className="resault" key={el.id} >
                                <a href="/" ><h1 >{el.title}</h1></a>
                                <p>{el.body.substring(0, 100)}...</p>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
                {flag.every(element => element === null) && (<h1>no resault</h1>)}
            </div>
        </div>
    );

}

export default SearchPage;