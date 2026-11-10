const ProfileCard = ({name, age, bio}) => {
    return (
        <div className="profile-card">
            <p>{name}</p>
            <p>{age}</p>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileCard