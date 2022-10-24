function GifSearch(){
    return (
        <div>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="button" class="btn btn-success">Search</button>
        </div>
    )
}

export default GifSearch
