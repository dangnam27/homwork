import Layout from "./layout";
import List from "./List";
import styles from "../styles/Index.module.css";
import { getStudents } from "./mock-data/data";
import Link from "next/link";
function Home() {
  return (
    <List>
      <div className={styles.container}>
        <main className={styles.main}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {getStudents().map((student) => (
                <tr className={styles.tr} key={student.id}>
                  <td className={styles.td}>{student.id}</td>
                  <td className={styles.td}>{student.name}</td>
                  <td className={styles.td}>
                    <Link
                      href={{
                        pathname: `/student/[id]`,
                        query: {
                          name: student.name,
                          id: student.id,
                        },
                      }}>
                      Show
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </List>
  );
}

export default Home;
