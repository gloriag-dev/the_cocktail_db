import React from "react"
import "./style.scss"
import { TextField } from '@material-ui/core';

export interface ISearchBarPropsDTO {
    e: any,
    onChange: any

}


export default function SearchBar(props: ISearchBarPropsDTO) {

    const handleChange = (event: any) => {
        event.stopPropagation()
        event.preventDefault()
        let search = event.target.value
        console.log(search, "SEARCH!!!")
        props.onChange(search)
    }

    return <div className="searchBar">
        <h2>Hey, I'm here for a specific cocktail!</h2>
        <TextField id="search-cocktail" label="Search Cocktails" variant="filled" className="searchMe" onChange={handleChange}
            placeholder="Search..." color="primary" />
    </div>
}