import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p>No quote found</p>;
	}

	return (
		<section>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btm--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;

// useRouteMatch: The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would. It’s mostly useful for getting access to the match data without actually rendering a <Route>.
