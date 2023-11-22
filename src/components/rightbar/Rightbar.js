import React from 'react'
import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className='Rightbar'>
     <div className="rightbarwrapper">
      <div className="birthdaycontainer" /* Birthday section  */>
        <img className='birthdayimage' src="https://img.freepik.com/free-photo/birthday-present-with-balloons_1156-421.jpg?size=626&ext=jpg&ga=GA1.1.1734901417.1700073058&semt=ais" alt="error" />
      <span className="birthdaytext"><b>Clue Me</b> and 4 other <br></br><b>Friends</b> have a Birthday today</span>
      </div>
      <div className="rightbarad">
        <   img className='rightbaradimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lgonD2VETfh6AXtyX4YwHMzadenf9ypcww&usqp=CAU" alt="error" /  /* Ad picture in rightbar */>
        <h4 className="rightbartitle">Online Friends </h4>

      <ul className="rightbarfriendlist" /* here will be online friends here we have taken only one friend and showed multiple time just because to complete ui  */>
        <li className="rightbarfriend">
       
          <div className="rightbarprofileimagecontainer">
         
            <img className='rightbarprofileimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0e3dTwgG_66el4AQI7KEOnhdN9TtD_h9Cw&usqp=CAU" alt="error" />
           
            <span className="rightbaronline"></span>
            
          </div>
          <span className="rightbarusername">Ali</span>
        </li>

        <li className="rightbarfriend">
       
       <div className="rightbarprofileimagecontainer">
      
         <img className='rightbarprofileimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0e3dTwgG_66el4AQI7KEOnhdN9TtD_h9Cw&usqp=CAU" alt="error" />
        
         <span className="rightbaronline"></span>
         
       </div>
       <span className="rightbarusername">Ali</span>
     </li>

     <li className="rightbarfriend">
       
       <div className="rightbarprofileimagecontainer">
      
         <img className='rightbarprofileimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0e3dTwgG_66el4AQI7KEOnhdN9TtD_h9Cw&usqp=CAU" alt="error" />
        
         <span className="rightbaronline"></span>
         
       </div>
       <span className="rightbarusername">Ali</span>
     </li>

      </ul>
         
        </div>
     </div>
        
     </div>
    
  )
}

export default Rightbar
