import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  const { id, name } = router.query;
  return (
    <div>
      <h2>Student Information</h2>
      <p>Student: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Student;
