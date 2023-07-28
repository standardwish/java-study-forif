import { AddModal, DeleteModal, ShowUserModal } from "./modalContainer";

interface ModalProps {
  actionType: string;
}

const URI = `${process.env.NEXTAUTH_URL}/api/users`;

export default function Modal(props: ModalProps) {
  const { actionType } = props;

  switch (actionType) {
    case "ADD":
      return <AddModal />;
    case "REMOVE":
      return <DeleteModal />;
    case "SHOWUSER":
      return <ShowUserModal />;
    default:
      return <div>UNAUTHROIZED ACCESS</div>;
  }
}
