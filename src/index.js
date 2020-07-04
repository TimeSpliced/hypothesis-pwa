import './style';
import { useState, useEffect } from 'preact/hooks';

const viaUrl = 'https://via.hypothes.is/';
const historySize = 10;

function App() {
	const [formUrl, setFormUrl] = useState('');
	const [lastUrls, setLastUrls] = useState([]);

	useEffect(() => {
		let urlsLocalString = localStorage.getItem('lastsViaHyp');

		if (urlsLocalString) setLastUrls(JSON.parse(urlsLocalString));

		// Shared data is send as URL search params.
		let parsedUrl = new URL(window.location.href);
		let text = parsedUrl.searchParams.get("text");
		let url = parsedUrl.searchParams.get("url");

		if (url) {
			setFormUrl(url);
		} else if (text) {
			setFormUrl(text);
		}

	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formUrl != '') {
			manageLocalHistory(formUrl)
			//document.location.href = (viaUrl + formUrl);
			window.open(viaUrl + formUrl);
		}
	}

	const manageLocalHistory = (url) => {
		let r = lastUrls;
		let already = lastUrls.indexOf(url);

		if (already >= 0) r.splice(already, 1);
		r.unshift(url);
		if (r.length > historySize) r.pop();

		localStorage.setItem('lastsViaHyp', JSON.stringify(r))
	}

	return (
		<>
			<header><span class="logo">h.</span> Share via <a href="https://hypothes.is/">hypothes.is</a></header>
			<form 
				class="url-form"
				onSubmit={handleSubmit}
				novalidate>
				<input id="search"
					aria-label="Web or PDF document to annotate"
					autofocus
					placeholder="Paste a link to create or view annotations"
					type="url"
					value={formUrl}
					onChange={e => setFormUrl(e.target.value)}
				/>
				<button type="submit">Annotate</button>
			</form>
			{lastUrls.length > 0 &&
			<article>
				<header>Local history</header>
				<ul>
				{lastUrls.map(x => new URL(x))
								 .map(x => <li key={x.href}>
														 <img 
															 style={{width: 16, float:'left', marginRight: 5}} 
															 src={x.origin + '/favicon.ico'} 
															 onError={(e)=>{e.target.onerror = null; e.target.src='/assets/icons/favicon.default.png'}}
															 />
									 					 <a class="overflow" href={viaUrl + x.href}>
															 {x.host + x.pathname}
														</a>
													 </li>)}
				</ul>
			</article>}
			<footer><span>This app is not affiliated with the official hypothesis service</span> <a href="https://github.com/TimeSpliced/hypothesis-pwa">Sources & doc</a></footer>
		</>
	);
}

export default App;