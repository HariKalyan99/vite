import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreStories } from '../store/StoreStories';
import AddStory from './AddStory';

const StoryCard = ({tag, story, location, date, id}) => {

    const {deleteStory} = useContext(StoreStories);
    const [getFlag, setFlag] = useState(false);
  return (
    <>
    <div 
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/dark-tone-memphis-instagram-ad-background_53876-99529.jpg')",
              backgroundSize: "576px",
            }}
          >
            <div className="d-flex flex-column h-100 p-1 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {tag}
              </h3>
              <p>{story}</p>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>{location}</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>{date}</small>
                </li>
              </ul>
              <button onClick={() => deleteStory(id)}>Delete story</button>
              <button onClick={() => {
                setFlag(!getFlag);
                return editStory(id)
              }}>Edit story</button>
            </div>
          </div>
          <div>
            {getFlag && <AddStory tag={tag} story={story} locations={location} date={date} id={id}/>}
          </div>
    </>
  )
}

export default StoryCard;