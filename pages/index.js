import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";


const user=process.env.NEXT_PUBLIC_MONGODB_USER
const password=process.env.NEXT_PUBLIC_MONGODB_PASSWORD

function HomePage(props){
    return  (
        <Fragment>
            <Head>
                <title>Events With Nextjs</title>
                <meta
                    name="description"
                    content="Browse a huge list of awesome events here!"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

export async function getStaticProps(){

    const client = await MongoClient.connect(
        `mongodb+srv://${user}:${password}@cluster0.m5ypm5u.mongodb.net/meetups?retryWrites=true&w=majority`
    )

    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close()

    return {
        props:{
            meetups:meetups.map((meetup)=>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate:10  // Time (in seconds) after the that the page will be regenerated with new data again(if any).
    };
}

export default HomePage;