import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === "completed") {
			history.push("/quotes");
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
	};

	return (
		<QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
	);
};

export default NewQuote;

// history : One of only 2 major dependencies of React Router (besides React itself), and which provides several different implementations for managing session history in JavaScript in various environments.

// history objects typically have the following properties and methods:

//     length - (number) The number of entries in the history stack
//     action - (string) The current action (PUSH, REPLACE, or POP)
//     location - (object) The current location. May have the following properties:
//         pathname - (string) The path of the URL
//         search - (string) The URL query string
//         hash - (string) The URL hash fragment
//         state - (object) location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
//     push(path, [state]) - (function) Pushes a new entry onto the history stack
//     replace(path, [state]) - (function) Replaces the current entry on the history stack
//     go(n) - (function) Moves the pointer in the history stack by n entries
//     goBack() - (function) Equivalent to go(-1)
//     goForward() - (function) Equivalent to go(1)
//     block(prompt) - (function) Prevents navigation (see the history docs
