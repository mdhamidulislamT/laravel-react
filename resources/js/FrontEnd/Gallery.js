
const Gallery = () => {
    return(
        <div className="container d-flex justify-content-center">
            <div className="row">

                <div className="col-md-12">
                    <h1> Image Gallery</h1>
                </div>
                <div  className="col-md-12">
                    <img src="images/usa.jpg"  width="300" height="200"  className="p-2 rounded float-left" alt="..." />
                    <img src="images/usa2.jpg" width="300" height="200" class="p-2 rounded float-left" alt="..." />
                    <img src="images/usa3.jpg" width="300" height="200" class="p-2 rounded float-left" alt="..." />
                    <img src="images/usa4.jpg" width="300" height="200" class="rounded float-left p-2" alt="..." />
                </div>
          </div>
      </div>
    )
}

export default Gallery;