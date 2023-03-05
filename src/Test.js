import React from 'react'
import firebaseConfigure from './firebase/Firebase'
import { ref, set, get,child } from "firebase/database";


function Test() {
    let tempObj = [
        {
            username: " name1",
            email: "email",
            profile_picture: "imageUrl"
        },
        {
            username: " name2",
            email: "email",
            profile_picture: "imageUrl"
        },
        {
            username: " name3",
            email: "email",
            profile_picture: "imageUrl"
        },
        {
            username: " name4",
            email: "email",
            profile_picture: "imageUrl"
        }
    ]
    let retrievTemp
    return (
        <div>
            <button onClick={() => {
                set(ref(firebaseConfigure.database, 'users/'), {
                    tempObj
                })
            }}>add</button>

            <button onClick={ ()  =>  {
                get(ref(firebaseConfigure.database, 'users/')).then(async (snapshot) => {
                    if (snapshot.exists()) {
                      console.log(snapshot.val().retrievTempNew[2]);
                      retrievTemp =await snapshot.val().tempObj
                    } else {
                      console.log("No data available");
                    }
                  }).catch((error) => {
                    console.error(error);
                  })
            }}>retriev</button>

            <button onClick={async () =>  {
               const retrievTempNew =[...retrievTemp].filter(d=>{return d.username!== " name3"})
                console.log(retrievTempNew)
                set(ref(firebaseConfigure.database, 'users/'), {
                    retrievTempNew
                })
            }}>delete</button>

        </div>
    )
}

export default Test