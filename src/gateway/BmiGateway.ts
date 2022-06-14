import { db } from "../firebase";

import { IBmi } from "@/interfaces";

class BmiGateway {
  getAll(): Promise<IBmi[]> {
    return db
      .collection("bmi")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return data as IBmi[];
      });
  }

  async addOne(bmi: IBmi) {
    const doc = await db.collection("bmi").add(bmi);

    await db
      .collection("bmi")
      .doc(doc.id)
      .update({
        ...bmi,
        id: doc.id,
      });
  }
}
export default new BmiGateway();
