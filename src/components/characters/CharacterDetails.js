import React, { useEffect } from "react";
import { getCharacter } from "../../action/characterDetailsAction";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";


const CharacterDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getCharacter(id));
  }, [dispatch]);

  const { characterDetails } = useSelector((state) => state.characterDetails);

  const details = Array.from(characterDetails);

  return (
    <section>
      {details &&
        details.map((detail) => {
          const { name, description, urls } = detail;
          const { path, extension } = detail.thumbnail;
          const image = `${path}.${extension}`;

          return (
            <div className="container-details" key={detail.id}>
              <h1>{name}</h1>
              <div className="main">
                <div className="info">
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="description">
                    {description.length <= 0 ? (
                      <p>
                        Sorry, but no description is available at this time.
                      </p>
                    ) : (
                      <p>{description}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="moreDetails">
                <h5>You can find more details here:</h5>
                <div className="links">
                  {urls &&
                    urls.map((url, index) => {
                      return (
                        <a
                          key={index}
                          href={url.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {url.type}
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default CharacterDetails;
