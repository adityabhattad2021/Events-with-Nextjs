import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		// console.log(enteredMeetupData);
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		console.log(data);

		router.push("/");
	}

	return (
		<Fragment>
			<Head>
				<title>Add a Meetup</title>
				<meta
					name="description"
					content="Don't just attend but add your own amzing meetup🤩"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	);
}

export default NewMeetupPage;
