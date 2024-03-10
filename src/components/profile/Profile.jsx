import css from "./Profile.module.css";


const Profile = ({ name, tag, location, image, stats:{ followers, views, likes } }) => {
return (
  <div className ={css.profile}>
    <div className={css.profile_user}>
      <img src={ image } alt={ name }className={css.profile_user_photo} width={250}/>
      <p className={css.profile_user_name}>{ name }</p>
      <p className={css.profile_user_tag}>&#64;{ tag }</p>
      <p className={css.profile_user_location}>{ location }</p>
    </div>
    <ul>
      <div className={css.profile_stats}>
        <li className={css.profile_stats_item}>
          <span className={css.profile_stats_label}>Followers<br/></span>
          <span className={css.profile_stats_quantity}>{ followers }</span>
        </li>
        <li className={css.profile_stats_item}>
          <span className={css.profile_stats_label}>Views<br/></span> 
          <span className={css.profile_stats_quantity}>{ views }</span>
        </li>
        <li className={css.profile_stats_item}>
          <span className={css.profile_stats_label}>Likes<br/></span>
          <span className={css.profile_stats_quantity}>{ likes }</span>
        </li>
      </div>
      
    </ul>
  </div>
)
}

export default Profile;
