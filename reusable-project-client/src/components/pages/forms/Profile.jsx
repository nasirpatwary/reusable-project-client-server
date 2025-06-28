import b from "../../../assets/images/b.png";
import useAuth from "../../hooks/useAuth";
import ProfileModal from "../../Model/ProfileModal";
const Profile = () => {
  const { user } = useAuth();
  return (
    <div
      className="hero bg-no-repeat bg-cover bg-center rounded"
      style={{
        backgroundImage: `url(${b})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full max-w-md space-y-2">
          <img
            className="size-10 object-cover object-center rounded-full logo cursor-pointer mx-auto"
            src={user && user?.photoURL}
            alt=""
          />
          <div>
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
          </div>
            <ProfileModal />
        </div>
      </div>
    </div>
  );
};

export default Profile;
