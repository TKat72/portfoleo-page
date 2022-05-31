import React from 'react';
import boss_shots from './boss_shots.png';
import art from './art.png';
import meme from './meme.png';
import give_in from './give_in.png';
import "./MyProjects.css"


export default function MyProjects() {

    return (
        <div className="my-prj">
            <div className="box-prj">
                <h2>Boss-Shots</h2>
                <img className="img-boss boss" src={boss_shots}></img>
                <br></br>
                <div> <a className="link-prj" href="https://boss-shots.herokuapp.com/"  target="_blank">LiveLink</a> <a className="link-prj" href="https://github.com/zavadev/boss-shots"  target="_blank">GitHub</a> </div>
                <p className="text-eraia" >
                    This is a clone of Flicker ( Not pixel perfect),  this is a full stuck application with two full crud and tree parsley crud futures.
                    You can create an account, log in and sign out. As a login user, you can add a photo and it will be displayed in the main Feed, if a photo belongs to the user you will see a list of them o the right side of the main page, you can update or delete your photos, for the file storage we used AWS. You can add tags to your photo, by selecting a tag from the given list of tags or creating a new one, the new tag will be added to the list of tags. You can leave a comment on the photo. Also as a login user, you can create an album and add photos to it, from all photos that were added by you or others users. All of your albums will be displayed on the right side of the main page right below your photos, you can update and delete your albums.
                    The project was created with Pothun, Flask, SqlAlckemy, and Alembic for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with Docker, GitHub, and Heroku. File storage AWS</p>


            </div>

            <div className="box-prj">
                <h2>Art Stagram</h2>
                <img className="img-boss" src={art}></img>
                <br></br>
                <div> <a className="link-prj" href="https://artstagram7.herokuapp.com/"  target="_blank">LiveLink</a> <a className="link-prj" href="https://github.com/TKat72/artStagramPj"  target="_blank">GitHub</a> </div>
                <p className="text-eraia" >
                This is a clone of Instagram ( Not pixel perfect),  this is a full stuck application with two full crud.
You can create an account, log in and sign out. As a login user, you can create a post by choosing up to 3 pictures. The newly created post will appear on top of the feed, if post belongs to the user, you can update or delete your post. You can leave a comment on any post including yours, if the comment belongs to the user, you can update the post or delete it. As a login user, you can check your profile page with all your posts and comments.
The project was created with Pothun, Flask, SqlAlckemy, and Alembic for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with Docker, GitHub, and Heroku. File storage AWS
                    </p>
            </div>
            <div className="box-prj">
                <h2>Give In</h2>
                <img className="img-boss" src={give_in}></img>
                <br></br>
                <div> <a className="link-prj" href="https://givein1.herokuapp.com/"  target="_blank">LiveLink</a> <a className="link-prj" href="https://github.com/TKat72/project-GiveIn"  target="_blank">GitHub</a> </div>
                <p className="text-eraia" >
                This is a simple full stuck application, for posting upcoming events or give away free products for people in need. You can register , sign-in or use demo user to see functionality . As login user you can see all events , post event if event belong to you u can edit and delete. As login user you can register for event , delete your registration or edit it . If event belong to you you can se all registrations for this event
                This project was created with Express, Sequelize, and PostSql for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with GitHub, and Heroku.
                </p>

            </div>
            <div className="box-prj">
                <h2>MemeOwerflow</h2>
                <img className="img-boss" src={meme}></img>
                <br></br>
                <div> <a className="link-prj"  href="https://aa-meme-overflow.herokuapp.com/"  target="_blank">LiveLink</a> <a className="link-prj" href="https://github.com/adamtang5/aa_mod4_meme_overflow_project"  target="_blank">GitHub</a> </div>
                <p className="text-eraia" >
                This is a clone of StackOverflow, where you can create an account, log in or use a demo account. As a login user, you can ask a funny question or answer other people's questions with meme pictures and comment on meme answers  as well as search  by word or letter that will find all of the existing questions that include that word or letter
This project was created with Express, Sequelize, PostgreSQL, Pug, and Bcrypt. Deployed with Git and Heroku</p>

            </div>
        </div >
    )
}
