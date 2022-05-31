// import { bmi } from "@/interfaces";
import { db } from "../firebase";

class BmiService {
  getAll() {
    return db
      .collection("bmi")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return data;
      });
  }
}
export default new BmiService();
