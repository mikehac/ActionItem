import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="container">
      <div className="row fw-bold bg-light py-2">
        <div className="col-3 text-center">Gender</div>
        <div className="col-1 text-center">Picture</div>
        <div className="col-2 text-center">Name</div>
      </div>
    </div>
  );
}
