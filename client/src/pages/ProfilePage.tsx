import ProfileHeader from "../components/ProfileHeader";
import ProfilePosts from "../components/ProfilePosts";

function ProfilePage() {
  return (
    <div className="lg:max-w-[1200px] mx-auto mt-10">
      <ProfileHeader />
      <ProfilePosts />
    </div>
  );
}

export default ProfilePage;
