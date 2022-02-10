import "./styles.css";
import swal from "sweetalert";
import { deleteData } from "../../../../Services/Operationes";
import { arrayRemove } from "firebase/firestore";
import { updateData } from "../../../../Services/Operationes";


export const handleDelete = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this tweet!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your tweet has been deleted!");
      deleteData("tweets", id);
    }
  });
};

export const handleLike = async ({ tweet }, uid) => {
  const { userLikes, likes, id } = tweet;
  const updateUserLikes = [...userLikes, uid];
  const updateLikes = likes;

  if (userLikes.includes(uid)) {
    await updateData("tweets", id, {
      userLikes: arrayRemove(uid),
      likes: updateLikes - 1,
    });
  } else {
    await updateData("tweets", id, {
      userLikes: updateUserLikes,
      likes: updateLikes + 1,
    });
  }
};
