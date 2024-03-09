const Profile = ({ name, tag, location, image, stats:{ followers, views, likes } }) => {
return (
  <div className ="profile">
    <div className="profile_user">
      <img src={ image } alt="" className="profile_user-photo"/>
      <p className="profile_user-name">{ name }</p>
      <p className="profile_user-tag">{ tag }</p>
      <p className="profile_user-location">{ location }</p>
    </div>
    <ul>
      <div className="profile_stats">
        <li>
          <span className="profile_stats-label">Followers </span>
          <span className="profile_stats-quantity">{ followers }</span>
        </li>
        <li>
          <span className="profile_stats-label">Views</span> 
          <span className="profile_stats-quantity">{ views }</span>
        </li>
        <li>
          <span className="profile_stats-label">Likes</span>
          <span className="profile_stats-quantity">{ likes }</span>
        </li>
      </div>
      
    </ul>
  </div>
)
}

export default Profile;
