import "./MangaCard.css";

export const MangaCardAdd = () => {

    const mangaImageUrl = `/src/assets/img/plus.png`;

    return (
            <div className="card m-1 w-33 animate__animated animate__fadeIn">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={mangaImageUrl} className="card-img"/>
                    </div>

                </div>

            </div>
    )
}
