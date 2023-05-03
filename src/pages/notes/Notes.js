import React, { useState, useEffect } from 'react'
import './style/notes.css'
import SelectIcon from '../../assets/icons/select-btn.svg'
import PinIcon from '../../assets/icons/pin-icon.svg'
import FavourateIcon from '../../assets/icons/fav.svg'
import Image from '../../assets/images/wp2839729-retro-wallpaper.png'
import MenuForNotes from '../../components/notes-menu/MenuForNotes'
import NoteAddSection from './NoteAddSection'
import Notesonwall from '../../components/UIComponents/Notesonwall'
import firebaseConfigure from '../../firebase/Firebase'
import { ref, set ,onValue} from "firebase/database"

function Notes({ handleSelectionNoteBtnclick, isAddBtnClicked, handleAddBtnClick, userData, isClicked }) {

    const [notes,setnotes] = useState(userData.userdata.notes.notes)

    const retrievDataFromFirebaseDb = () =>{
        onValue(ref(firebaseConfigure.database, 'users/'+ userData.userId +"/notes" ), (snapshot) => {
            const data = snapshot.val().notes;
            setnotes(data)
        })
    }

    useEffect(()=>{
        retrievDataFromFirebaseDb()
    },[])

    console.log(notes)
    return (
        <>
            <div className="notes-container">
                {notes ? 
                <div className="note-section">
                    <p>Dec 22, 2022  </p>
                    <div className="note-box-container">
                        {notes.map((data, index) => {
                            return (
                                <div className="note-box" key={index}>
                                    <img className='selection-btn' src={SelectIcon} alt="" onClick={() => {
                                        document.querySelectorAll('.note-box')[index].classList.toggle("border-color")
                                        handleSelectionNoteBtnclick(false)
                                    }} />
                                    {(notes.imageurl)&&<img className='note-image' src={Image} alt="" />}
                                    {(notes.videourl)&&<video controls>
                                        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                                    </video>}
                                    <MenuForNotes />
                                    <h3>{data.title}</h3>
                                    <p>{data.notetext}</p>
                                    <div className="note-bottom-icons">
                                        <img src={FavourateIcon} alt="" />
                                        <img src={PinIcon} alt="" />
                                    </div>
                                </div>)
                        })}
                    </div>
                </div> : 
                <div className='frame-for-empty-notes'>
                    <div className="frame-container">
                        <Notesonwall />
                        <p>“Try to add something <br/> that is important to you”</p>
                    </div>
                </div>
                }
            </div>
            <NoteAddSection userData={userData} isAddBtnClicked={isAddBtnClicked} handleAddBtnClick={handleAddBtnClick}/>
        </>
    )
}

export default Notes