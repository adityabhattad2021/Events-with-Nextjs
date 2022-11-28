// This function will be triggered when we request data to this route
// api/new-meetup (in this case)
import { MongoClient } from "mongodb";

const user=process.env.NEXT_PUBLIC_MONGODB_USER
const password=process.env.NEXT_PUBLIC_MONGODB_PASSWORD

async function handler(req, res) {
	if (req.method == "POST") {
		const data = req.body;
		try {
			const client = await MongoClient.connect(
				`mongodb+srv://${user}:${password}@cluster0.m5ypm5u.mongodb.net/meetups?retryWrites=true&w=majority`
			);
			const db = client.db();

			const meetupsCollection = db.collection("meetups");

			const result = await meetupsCollection.insertOne(data);

			console.log(result);

			client.close();

			res.status(201).json({ message: "Meetup Inserted!" });
		} catch (error) {
			console.log("err, ", error);
		}
	}
}


export default handler;