import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Sam", text: "Learning React is fun!" },
	{ id: "q2", author: "Samuel", text: "Learning React is so much fun!" },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
