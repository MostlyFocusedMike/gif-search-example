function GifSearch(){
    return (
        <div className="container">
            <label for="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput"/>
            <button type="button" className="btn btn-success">Find Gifs</button>
        </div>
    )
}

export default GifSearch