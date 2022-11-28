import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS=[
    {
        id:"m1",
        title:"A Meetup",
        image:'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        address:"Some Address 10, 12345 second street",
        description:"This is a awesome meetup"
    },
    {
        id:"m2",
        title:"A Meetup",
        image:'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        address:"Some Address 10, 12345 second street",
        description:"This is a awesome meetup"
    },
    {
        id:"m3",
        title:"A Meetup",
        image:'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        address:"Some Address 10, 12345 second street",
        description:"This is a awesome meetup"
    },
    {
        id:"m4",
        title:"A Meetup",
        image:'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        address:"Some Address 10, 12345 second street",
        description:"This is a awesome meetup"
    },
    {
        id:"m5",
        title:"A Meetup",
        image:'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        address:"Some Address 10, 12345 second street",
        description:"This is a awesome meetup"
    }
]

function HomePage(props){
    return  (
        <div>
            <MeetupList meetups={props.meetups} />
        </div>
    )
}

export async function getStaticProps(){
    return {
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:10  // Time (in seconds) after the that the page will be regenerated with new data again(if any).
    };
}

export default HomePage;