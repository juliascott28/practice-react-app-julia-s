import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
    return (
        <div className="Description of Students">
            <ProfileCard name="Julia" age="24" bio="LaunchCode student"/>
            <ProfileCard name="Lara" age="30" bio="Learning React" />
            <ProfileCard name="Eric" age="99" bio="I don't know" />
            <ProfileCard name="Dacosta" age="15" bio="Loves hiking" />
        </div>
    );
}

export default ProfileContainer