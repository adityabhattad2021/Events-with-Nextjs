import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetDetailsPage() {
	return (
		<MeetupDetail
			image="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
			title="First Meetup"
			address="Some street 5, Some City"
			description="An Awesome Meetup"
		/>
	);
}

export async function getStaticPaths() {
	return {
        fallback:false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
			{
				params: {
					meetupId: "m3",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	return {
		props: {
			meetupData: {
				image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
				title: "First Meetup",
				address: "Some street 5, Some City",
				description: "An Awesome Meetup",
			},
		},
	};
}

export default MeetDetailsPage;
