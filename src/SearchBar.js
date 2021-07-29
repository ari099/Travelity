import './SearchBar.css';

/**
 * SearchBar React component
 * @returns 
 */
function SearchBar() {
    return (
        <form className="SearchBar-form">
            <input className="SearchBar-component SearchBar-search"
                type='text'
                placeholder='Try "Mount Everest"' />
            <select className="SearchBar-component SearchBar-city-select">
                <option value="New York, USA">New York, USA</option>
            </select>
            <input className="SearchBar-component SearchBar-search-button"
                type="button"
                value="Search Places" />
        </form>
    );
}

export default SearchBar;