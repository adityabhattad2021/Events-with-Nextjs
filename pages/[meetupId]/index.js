import { MongoClient,ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetails";

const user=process.env.NEXT_PUBLIC_MONGODB_USER
const password=process.env.NEXT_PUBLIC_MONGODB_PASSWORD

function MeetDetailsPage(props) {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		`mongodb+srv://${user}:${password}@cluster0.m5ypm5u.mongodb.net/meetups?retryWrites=true&w=majority`
	);

	const db = client.db();

	const meetupCollection = db.collection("meetups");

    const meetups = await meetupCollection.find({},{_id:1}).toArray();

	return {
		fallback: false,
		paths: meetups.map((meetup)=>({
            params:{meetupId:meetup._id.toString()}
        }))
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		`mongodb+srv://${user}:${password}@cluster0.m5ypm5u.mongodb.net/meetups?retryWrites=true&w=majority`
	)

	const db = client.db()

	const meetupsCollection = db.collection("meetups");

	const selectedMeetups = await meetupsCollection.findOne({_id:ObjectId(meetupId)});

	client.close()

	return {
		props: {
			meetupData: {
				id:selectedMeetups._id.toString(),
				title:selectedMeetups.title,
				address:selectedMeetups.address,
				image:selectedMeetups.image,
				description:selectedMeetups.description
			},
		},
		revalidate:10
	};
}

export default MeetDetailsPage;
