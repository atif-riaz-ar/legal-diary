import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const getIcon = (props) => {
	if (props.name === 'legal_news') {
		return (
			<Svg viewBox="0 0 465 465" width={props.height} height={props.height}>
				<Path fill={props.color} d="M457.5 15H7.5A7.5 7.5 0 000 22.5v420a7.5 7.5 0 007.5 7.5h450a7.5 7.5 0 007.5-7.5v-420a7.5 7.5 0 00-7.5-7.5zM450 65h-35V30h35v35zm-50-35v35H15V30h385zM15 435V80h435v355H15z" />
				<Path fill={props.color} d="M397.5 220h-330c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h330c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM212.5 260h-145c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM212.5 300h-145c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM212.5 340h-145c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM397.5 260h-145a7.5 7.5 0 00-7.5 7.5v30c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V275h130v105H260v-52.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v60a7.5 7.5 0 007.5 7.5h145a7.5 7.5 0 007.5-7.5v-120a7.5 7.5 0 00-7.5-7.5zM212.5 380h-145c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h145c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM336.641 160.31c5.052 2.658 11.048 3.639 16.848 4.587 13.05 2.134 14.905 3.538 14.905 7.598 0 5.925-8.605 7.506-13.69 7.506-6.801 0-12.175-2.222-13.371-5.53-1.41-3.896-5.715-5.91-9.604-4.5a7.5 7.5 0 00-4.501 9.604c3.442 9.514 13.97 15.425 27.475 15.425 16.893 0 28.69-9.255 28.69-22.506 0-7.992-3.676-14.151-10.631-17.812-5.053-2.659-11.052-3.641-16.853-4.589-13.043-2.133-14.897-3.534-14.897-7.587 0-5.925 8.605-7.506 13.69-7.506 6.8 0 12.173 2.222 13.372 5.528a7.496 7.496 0 009.606 4.495 7.5 7.5 0 004.495-9.607C378.729 125.907 368.202 120 354.703 120c-16.893 0-28.69 9.255-28.69 22.506 0 7.989 3.675 14.145 10.628 17.804zM250.633 189.342a7.5 7.5 0 0013.961 1.548l8.513-16.799 8.513 16.799a7.502 7.502 0 007.517 4.064 7.5 7.5 0 006.444-5.612l15.203-60a7.499 7.499 0 00-5.429-9.112 7.5 7.5 0 00-9.112 5.428l-10.288 40.603-6.157-12.151a7.501 7.501 0 00-13.38 0l-6.157 12.151-10.288-40.603a7.5 7.5 0 00-14.541 3.684l15.201 60zM170.319 195H212.7c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-34.881v-15h20.754c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-20.754v-15H212.7c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-42.381a7.5 7.5 0 00-7.5 7.5v60a7.5 7.5 0 007.5 7.5zM89.106 195a7.5 7.5 0 007.5-7.5v-39.661l38.009 44.53a7.498 7.498 0 0013.204-4.87v-60c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v39.661L94.81 122.63a7.498 7.498 0 00-13.204 4.87v60a7.5 7.5 0 007.5 7.5z" />
			</Svg>
		)
	}
	if (props.name === 'goto') {
		return (
			<Svg viewBox="0 0 385.201 385.201" width={props.height} height={props.height}>
				<Path fill={props.color} d="M381.658 183.472L201.878 3.691a12.258 12.258 0 00-8.794-3.597c-.096 0-.168-.048-.265-.048H12.364C5.723.046.334 5.436.334 12.076c0 .096.048.168.048.265a12.357 12.357 0 003.597 8.794l171.384 171.384L3.618 364.263c-4.824 4.824-4.824 12.644 0 17.468 2.863 2.863 6.749 3.814 10.466 3.284h176.978c3.717.529 7.603-.421 10.466-3.284l180.118-180.118c2.502-2.502 3.645-5.799 3.549-9.083.097-3.26-1.046-6.556-3.537-9.058zM187.381 360.955H41.862l159.329-159.329c2.502-2.502 3.645-5.799 3.549-9.083.096-3.272-1.047-6.569-3.549-9.071L41.838 24.106h145.579l168.412 168.412-168.448 168.437z" />
			</Svg>
		)
	}
	if (props.name === 'menu') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 384.97 384.97">
				<Path fill={props.color} d="M72.182 0H24.061C10.767 0 0 10.779 0 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.293 0 24.061-10.767 24.061-24.061V24.061C96.242 10.779 85.475 0 72.182 0zm0 72.182H24.061V24.061h48.121v48.121zM216.545 0h-48.121c-13.293 0-24.061 10.779-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061V24.061C240.606 10.779 229.827 0 216.545 0zm0 72.182h-48.121V24.061h48.121v48.121zM360.909 0h-48.121c-13.293 0-24.061 10.779-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061V24.061C384.97 10.779 374.191 0 360.909 0zm0 72.182h-48.121V24.061h48.121v48.121zM72.182 144.364H24.061C10.767 144.364 0 155.131 0 168.424v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.293 0 24.061-10.767 24.061-24.061v-48.121c-.001-13.281-10.768-24.06-24.061-24.06zm0 72.181H24.061v-48.121h48.121v48.121zM216.545 144.364h-48.121c-13.293 0-24.061 10.767-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061v-48.121c0-13.282-10.779-24.061-24.061-24.061zm0 72.181h-48.121v-48.121h48.121v48.121zM360.909 144.364h-48.121c-13.293 0-24.061 10.767-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061v-48.121c0-13.282-10.779-24.061-24.061-24.061zm0 72.181h-48.121v-48.121h48.121v48.121zM72.182 288.727H24.061C10.767 288.727 0 299.494 0 312.788v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.293 0 24.061-10.767 24.061-24.061v-48.121c-.001-13.282-10.768-24.061-24.061-24.061zm0 72.182H24.061v-48.121h48.121v48.121zM216.545 288.727h-48.121c-13.293 0-24.061 10.767-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061v-48.121c0-13.282-10.779-24.061-24.061-24.061zm0 72.182h-48.121v-48.121h48.121v48.121zM360.909 288.727h-48.121c-13.293 0-24.061 10.767-24.061 24.061v48.121c0 13.293 10.767 24.061 24.061 24.061h48.121c13.281 0 24.061-10.767 24.061-24.061v-48.121c0-13.282-10.779-24.061-24.061-24.061zm0 72.182h-48.121v-48.121h48.121v48.121z" />
			</Svg>
		)
	}
	if (props.name === 'logout') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 520.349 520.349" {...props}>
				<Path fill={props.color} d="M445.223 0H142.589c-6.683 0-12.105 5.423-12.105 12.105v180.979h16.65c-5.006-6.392-7.725-14.224-7.725-22.467-.006-9.764 3.8-18.943 10.708-25.845 1.421-1.421 2.973-2.687 4.583-3.845V24.211h278.417v8.697l-127.104 92.285v395.155l127.796-92.787c1.626 4.77 6.095 8.228 11.414 8.228 6.685 0 12.105-5.426 12.105-12.105V12.105C457.328 5.417 451.907 0 445.223 0zm-91.192 331.973c-5.71 0-10.468-7.046-11.691-16.485h-13.63v-10.592h13.819c1.448-8.86 6.017-15.38 11.49-15.38 6.638 0 12.011 9.498 12.011 21.231.012 11.721-5.367 21.226-11.999 21.226zm-203.909-17.502a37.047 37.047 0 004.572 3.824v105.389c0 6.68-5.426 12.105-12.105 12.105-6.683 0-12.105-5.426-12.105-12.105V266.139h16.65c-11.186 14.327-10.199 35.132 2.988 48.332zm86.584-96.086a12.312 12.312 0 010 17.425l-58.995 59.001a12.348 12.348 0 01-8.709 3.611 12.304 12.304 0 01-8.71-3.611c-4.811-4.817-4.805-12.613 0-17.419l37.974-37.977H75.336c-6.803 0-12.315-5.512-12.315-12.315s5.506-12.318 12.321-12.318h122.917l-37.968-37.974c-4.805-4.805-4.811-12.608 0-17.413 4.812-4.812 12.614-4.812 17.425 0l58.99 58.99z" />
			</Svg>
		)
	}
	if (props.name === 'live_webinar') {
		return (
			<Svg viewBox="0 0 465 465" width={props.height} height={props.height}>
				<Path fill={props.color} d="M437.045 25.568H27.955C12.541 25.568 0 38.108 0 53.523v276.136c0 15.414 12.541 27.954 27.955 27.954h409.091c15.414 0 27.955-12.54 27.955-27.954V53.523c-.001-15.415-12.542-27.955-27.956-27.955zM450 329.659c0 7.143-5.812 12.954-12.955 12.954H27.955c-7.143 0-12.955-5.811-12.955-12.954V53.523c0-7.143 5.812-12.955 12.955-12.955h409.091c7.143 0 12.955 5.811 12.955 12.955v276.136z" />
				<Path fill={props.color} d="M232.5 183.75c32.332 0 58.636-26.304 58.636-58.636 0-32.332-26.304-58.636-58.636-58.636s-58.636 26.304-58.636 58.636c0 32.332 26.304 58.636 58.636 58.636zm0-102.273c24.061 0 43.636 19.575 43.636 43.636 0 24.061-19.575 43.636-43.636 43.636s-43.636-19.575-43.636-43.636c0-24.061 19.575-43.636 43.636-43.636zM153.837 265.02a7.5 7.5 0 009.767-4.137c11.427-28.218 38.47-46.451 68.896-46.451s57.47 18.233 68.896 46.451a7.502 7.502 0 009.767 4.137 7.501 7.501 0 004.137-9.767c-13.731-33.91-46.232-55.821-82.8-55.821s-69.068 21.911-82.8 55.821a7.502 7.502 0 004.137 9.767zM427.5 291.477h-390a7.5 7.5 0 000 15h390a7.5 7.5 0 000-15zM355.227 424.432h-64.091v-44.318a7.5 7.5 0 00-15 0v44.318h-87.272v-44.318a7.5 7.5 0 00-15 0v44.318h-64.091a7.5 7.5 0 000 15h245.454a7.5 7.5 0 000-15z" />
			</Svg>
		)
	}
	if (props.name === 'the_bar') {
		return (
			<Svg viewBox="0 0 463 463" width={props.height} height={props.height}>
				<Path fill={props.color} d="M423 219.5V211h16.5a7.5 7.5 0 007.5-7.5V179h8.5a7.5 7.5 0 007.5-7.5v-24a7.5 7.5 0 00-3.779-6.512l-224-128a7.503 7.503 0 00-7.442 0l-224 128A7.499 7.499 0 000 147.5v24a7.5 7.5 0 007.5 7.5H16v24.5a7.5 7.5 0 007.5 7.5H40v8.5c0 5.827 3.235 10.908 8 13.555V372H23.5a7.5 7.5 0 00-7.5 7.5V404H7.5a7.5 7.5 0 00-7.5 7.5v32a7.5 7.5 0 007.5 7.5h448a7.5 7.5 0 007.5-7.5v-32a7.5 7.5 0 00-7.5-7.5H447v-24.5a7.5 7.5 0 00-7.5-7.5H415V233.055c4.765-2.647 8-7.728 8-13.555zm-15 0a.5.5 0 01-.5.5h-32a.5.5 0 01-.5-.5V211h33v8.5zM335 372V233.055c4.765-2.647 8-7.728 8-13.555V211h17v8.5c0 5.827 3.235 10.908 8 13.555V372h-33zm-32 0V235h17v137h-17zm-48 0V233.055c4.765-2.647 8-7.728 8-13.555V211h17v8.5c0 5.827 3.235 10.908 8 13.555V372h-33zm-32 0V235h17v137h-17zm-48 0V233.055c4.765-2.647 8-7.728 8-13.555V211h17v8.5c0 5.827 3.235 10.908 8 13.555V372h-33zm-32 0V235h17v137h-17zm-48 0V233.055c4.765-2.647 8-7.728 8-13.555V211h17v8.5c0 5.827 3.235 10.908 8 13.555V372H95zm73-161v8.5a.5.5 0 01-.5.5h-32a.5.5 0 01-.5-.5V211h33zm80 0v8.5a.5.5 0 01-.5.5h-32a.5.5 0 01-.5-.5V211h33zm80 0v8.5a.5.5 0 01-.5.5h-32a.5.5 0 01-.5-.5V211h33zM15 151.852L231.5 28.138 448 151.852V164H15v-12.148zM31 179h401v17H31v-17zm57 32v8.5a.5.5 0 01-.5.5h-32a.5.5 0 01-.5-.5V211h33zm-25 24h17v137H63V235zm385 201H15v-17h433v17zm-16-32H31v-17h401v17zm-49-32V235h17v137h-17z" />
			</Svg>
		)
	}
	if (props.name === 'alert') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 191.819 191.819">
				<Path fill={props.color} d="M100.132 162.738c-.007-8.527.03-17.061-.397-25.576-.054-1.07-.717-2.167-1.835-2.41-.799-.169-1.594-.346-2.389-.531-1.965-.788-3.293 1.319-2.939 2.991-.008.024-.026.04-.033.065-1.964 6.93-1.582 14.225-1.625 21.363-.01 1.689-.045 3.383-.065 5.077-6.279 1.484-10.896 7.344-10.328 14.237.624 7.575 7.357 14.144 14.98 13.855 6.823-.258 12.607-5.701 14.491-12.015 2.185-7.329-2.569-15.29-9.86-17.056z" />
				<Path fill={props.color} d="M155.98 88.845c-7.952-3.009-14.352-5.683-20.453-12.042-6.743-7.028-11.023-16.231-16.604-24.138-9.005-12.757-20.028-24.496-35.045-29.811-6.623-2.344-13.963-2.571-21.083-1.233a10.852 10.852 0 00-2.895.639 52.91 52.91 0 00-6.368 2.016 17.404 17.404 0 00-.054-.283c-.546-2.963-1.657-5.85-3.002-8.602a42.458 42.458 0 00-1.297-2.503 91.916 91.916 0 00-1.328-2.357C45.527 6.557 41.571.256 36.342.008c-6.073-.289-8.26 7.648-7.815 12.413.727 7.775 7.477 13.32 11.948 19.252-23.898 18.825-19.159 49.916-3.408 72.375 5.237 7.467 10.021 15.01 12.153 23.979 1.893 7.966.335 16.288-.311 24.311-.6 7.463 1.024 17.802 8.891 18.196 5.595 2.567 13.945 2.34 20.179-.947 1.534-.81.907-3.586-.919-3.392-5.2.555-11.18 1.105-16.278-.195-9.55-2.438 6.501-17.562 9.328-20.141 12.455-11.365 27.369-20.754 41.444-29.989 9.076-5.956 18.683-10.957 29.184-13.837 6.263-1.719 23.874-4.26 18.477 7.206-4.187 8.894-13.495 16.729-20.665 23.225-8.513 7.714-18.01 14.269-27.993 19.918-3.354 1.898-.345 7.058 3.019 5.162 13.113-7.395 25.013-16.448 35.756-26.987 5.296-5.196 15.935-14.649 17.224-23.576 4.136-9.239-1.624-14.749-10.576-18.136zM46.935 25.347c-4.291-.695-7.93-4.286-10.331-7.706-1.329-1.892-2.413-4.299-2.039-6.658.314-1.973 1.864-3.05 3.576-2.148 5.033 2.652 9.105 11.518 10.063 17.093-.314-.279-.724-.492-1.269-.581zm68.283 32.35c1.076 1.536 2.095 3.086 3.111 4.632-.004.025-.018.045-.021.071-.013.141.004.28.002.42-1.567-2.595-3.134-5.091-4.753-7.467.564.787 1.118 1.57 1.661 2.344zM80.846 33.156c.059.034.115.061.174.094 5.047 2.853 9.912 6.253 14.431 10.028 6.398 7.711 12.548 15.625 18.903 23.36 2.769 4.818 5.561 9.631 9.175 13.8.472.544.959 1.062 1.455 1.565a36.15 36.15 0 00-4.848 2.767c-5.768 3.904-10.934-3.299-14.699-7.119a126.663 126.663 0 01-15.712-19.533 145 145 0 01-7.966-13.78c-1.316-2.604-2.414-5.292-3.142-8.118-.663-2.572.515-3.006 2.229-3.064z" />
			</Svg>
		)
	}
	if (props.name === 'circular') {
		return (
			<Svg viewBox="0 0 32 32" width={props.height} height={props.height}>
				<Path fill={props.color} d="M26 16l-6 6h4c0 1.102-.898 2-2 2H10c-1.102 0-2-.898-2-2v-2H4v2c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6h4l-6-6zM22 4H10c-3.309 0-6 2.691-6 6v.062H0L6 16l6-5.938H8V10c0-1.102.898-2 2-2h12c1.102 0 2 .898 2 2v2h4v-2c0-3.309-2.691-6-6-6z" />
			</Svg>
		)
	}
	if (props.name === 'caselaws') {
		return (
			<Svg viewBox="0 0 410.995 410.995" width={props.height} height={props.height}>
				<Path fill={props.color} d="M390.375 85.14H377.99V79.2c0-5.388-4.384-9.771-9.772-9.771h-38.771c-5.388 0-9.772 4.383-9.772 9.771v5.94h-45.192V61.732c0-20.531-16.704-37.235-37.235-37.235h-63.506c-20.531 0-37.234 16.704-37.234 37.235V85.14H91.32V79.2c0-5.388-4.384-9.771-9.772-9.771H42.777c-5.388 0-9.771 4.383-9.771 9.771v5.94H20.62C9.25 85.14 0 94.39 0 105.76v247.363c0 11.37 9.25 20.62 20.62 20.62h7.554v7.754a5 5 0 005 5h38.652a5 5 0 005-5v-7.754h257.343v7.754a5 5 0 005 5h38.652a5 5 0 005-5v-7.754h7.554c11.37 0 20.62-9.25 20.62-20.62V105.76c0-11.37-9.25-20.62-20.62-20.62zm10.62 20.62v23.469c-17.741-2.258-31.83-16.348-34.087-34.089h23.468c5.854 0 10.619 4.764 10.619 10.62zM54.169 363.743C51.82 340.477 33.267 321.924 10 319.576v-180.27c23.266-2.347 41.82-20.9 44.169-44.166h118.413v31.898a5 5 0 005 5h55.831a5 5 0 005-5V95.14h118.419c2.348 23.264 20.899 41.816 44.163 44.166v180.271c-23.264 2.349-41.815 20.901-44.163 44.166H54.169zM182.582 95.14h45.831v26.898h-45.831V95.14zm147.092-15.712h38.315v5.711h-38.315v-5.711zM146.507 61.732c0-15.018 12.217-27.235 27.234-27.235h63.506c15.018 0 27.235 12.217 27.235 27.235v23.404h-9.622V63.454c0-10.661-8.674-19.335-19.335-19.335h-60.063c-10.661 0-19.334 8.674-19.334 19.335v21.682h-9.622V61.732zm19.621 1.722c0-5.147 4.188-9.335 9.334-9.335h60.063c5.147 0 9.335 4.188 9.335 9.335V85.14h-78.732V63.454zM43.005 79.428H81.32v5.711H43.005v-5.711zM20.62 95.14h23.473C41.835 112.884 27.744 126.974 10 129.23v-23.47c0-5.856 4.764-10.62 10.62-10.62zM10 353.123v-23.471c17.744 2.256 31.835 16.347 34.093 34.091H20.62c-5.856 0-10.62-4.764-10.62-10.62zm56.826 23.374H38.174v-2.754h28.652v2.754zm305.995 0h-28.652v-2.754h28.652v2.754zm17.554-12.754h-23.468c2.257-17.742 16.346-31.832 34.087-34.09v23.47c.001 5.856-4.764 10.62-10.619 10.62z" />
				<Path fill={props.color} d="M176.114 348.582H61.231a5 5 0 000 10h114.883a5 5 0 000-10zM356.68 105.565a5 5 0 00-5-5h-92.335a5 5 0 000 10h92.335a5 5 0 005-5zM358.637 114.522h-55.831a5 5 0 000 10h55.831a5 5 0 000-10zM56.568 148.511a5 5 0 00-5-5H18.284a5 5 0 000 10h33.284a5 5 0 005-5zM29.021 157.469H18.284a5 5 0 000 10h10.737a5 5 0 000-10zM117.767 337.477a5 5 0 00-5-5H52.642a5 5 0 000 10h60.125a5 5 0 005-5zM387.481 345.226c-1.31 0-2.6.54-3.53 1.47a5.04 5.04 0 00-1.47 3.53c0 1.32.54 2.61 1.47 3.54a5.03 5.03 0 003.53 1.46c1.32 0 2.61-.53 3.54-1.46.93-.93 1.46-2.22 1.46-3.54 0-1.31-.53-2.6-1.46-3.53a5.046 5.046 0 00-3.54-1.47zM23.511 345.226c-1.32 0-2.61.54-3.54 1.47a5.03 5.03 0 00-1.46 3.53c0 1.32.53 2.61 1.46 3.54.93.93 2.22 1.46 3.54 1.46s2.6-.53 3.53-1.46c.94-.93 1.47-2.22 1.47-3.54a5.022 5.022 0 00-5-5zM387.481 113.656c1.32 0 2.61-.54 3.54-1.47a5.03 5.03 0 001.46-3.53c0-1.32-.53-2.61-1.46-3.54a5.036 5.036 0 00-3.54-1.46c-1.31 0-2.6.53-3.53 1.46-.93.93-1.47 2.22-1.47 3.54a5.022 5.022 0 005 5zM23.511 113.656c1.32 0 2.61-.54 3.53-1.47a4.98 4.98 0 001.47-3.53 5.003 5.003 0 00-5-5c-1.32 0-2.61.53-3.54 1.46-.93.93-1.46 2.22-1.46 3.54 0 1.31.53 2.6 1.46 3.53.93.93 2.22 1.47 3.54 1.47z" />
			</Svg>
		)
	}
	if (props.name === 'legal_dictionary') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 335.08 335.079">
				<Path fill={props.color} d="M311.175 115.775c-1.355-10.186-1.546-27.73 7.915-33.621.169-.108.295-.264.443-.398 7.735-2.474 13.088-5.946 8.886-10.618l-114.102-34.38L29.56 62.445S8.403 65.469 10.293 98.339c1.026 17.89 6.637 26.676 11.544 31l-15.161 4.569c-4.208 4.672 1.144 8.145 8.88 10.615.147.138.271.293.443.401 9.455 5.896 9.273 23.438 7.913 33.626-33.967 9.645-21.774 12.788-21.774 12.788l7.451 1.803c-5.241 4.736-10.446 13.717-9.471 30.75 1.891 32.864 19.269 35.132 19.269 35.132l120.904 39.298 182.49-44.202s12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712 7.921-33.623.174-.105.301-.264.442-.396 7.736-2.474 13.084-5.943 8.881-10.615l-7.932-2.395c5.29-3.19 13.236-11.527 14.481-33.183.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794c.001.006 12.198-3.142-21.773-12.788zm-152.642-.421l30.688-6.307 103.708-21.312 15.451-3.178c-4.937 9.036-4.73 21.402-3.913 29.35.179 1.798.385 3.44.585 4.688L288.14 122.8l-130.897 32.563 1.29-40.009zM26.71 147.337l15.449 3.178 99.597 20.474 8.701 1.782 26.093 5.363 1.287 40.01-134.534-33.471-13.263-3.296c.195-1.25.401-2.89.588-4.693.812-7.942 1.023-20.311-3.918-29.347zm-6.002-50.58c-.187-8.743 1.371-15.066 4.52-18.28 2.004-2.052 4.369-2.479 5.991-2.479.857 0 1.474.119 1.516.119l79.607 25.953 39.717 12.949-1.303 40.289L39.334 124.07l-5.88-1.647a3.56 3.56 0 00-.735-.113c-.459-.033-11.475-1.047-12.011-25.553zm119.871 184.109L23.28 247.98a3.489 3.489 0 00-.733-.116c-.467-.031-11.488-1.044-12.021-25.544-.19-8.754 1.376-15.071 4.519-18.288 2.009-2.052 4.375-2.479 5.994-2.479.859 0 1.474.115 1.519.115 0 0 .005 0 0 0l119.316 38.908-1.295 40.29zm153.705-41.407c.185 1.804.391 3.443.591 4.693l-147.812 36.771 1.292-40.01 31.601-6.497 4.667 1.129 17.492-5.685 80.631-16.569 15.457-3.18c-4.942 9.035-4.737 21.406-3.919 29.348zm8.142-54.375a2.84 2.84 0 00-.791.122l-11.148 3.121-106.148 29.764-1.298-40.289 34.826-11.359 84.327-27.501c.011-.005 4.436-.988 7.684 2.315 3.144 3.214 4.704 9.537 4.52 18.28-.55 24.498-11.571 25.516-11.972 25.547z" />
			</Svg>
		)
	}
	if (props.name === 'sme_corner') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 80.13 80.13">
				<Path fill={props.color} d="M48.355 17.922c3.705 2.323 6.303 6.254 6.776 10.817a11.69 11.69 0 004.966 1.112c6.491 0 11.752-5.261 11.752-11.751 0-6.491-5.261-11.752-11.752-11.752-6.429.002-11.644 5.169-11.742 11.574zm-7.699 24.062c6.491 0 11.752-5.262 11.752-11.752s-5.262-11.751-11.752-11.751c-6.49 0-11.754 5.262-11.754 11.752s5.264 11.751 11.754 11.751zm4.985.801h-9.972c-8.297 0-15.047 6.751-15.047 15.048v12.195l.031.191.84.263c7.918 2.474 14.797 3.299 20.459 3.299 11.059 0 17.469-3.153 17.864-3.354l.785-.397h.084V57.833c.003-8.297-6.747-15.048-15.044-15.048zm19.443-12.132h-9.895a14.483 14.483 0 01-4.47 10.088c7.375 2.193 12.771 9.032 12.771 17.11v3.758c9.77-.358 15.4-3.127 15.771-3.313l.785-.398h.084V45.699c0-8.296-6.75-15.046-15.046-15.046zm-45.049-.8c2.299 0 4.438-.671 6.25-1.814a14.544 14.544 0 015.467-9.276c.012-.22.033-.438.033-.66 0-6.491-5.262-11.752-11.75-11.752-6.492 0-11.752 5.261-11.752 11.752 0 6.488 5.26 11.75 11.752 11.75zm10.554 10.888a14.492 14.492 0 01-4.467-10.032c-.367-.027-.73-.056-1.104-.056h-9.971C6.75 30.653 0 37.403 0 45.699v12.197l.031.188.84.265c6.352 1.983 12.021 2.897 16.945 3.185v-3.683c.002-8.078 5.396-14.915 12.773-17.11z" />
			</Svg>
		)
	}
	if (props.name === 'videos') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 55.125 55.125" {...props}>
				<Path fill={props.color} d="M4.167 47.007h46.792a4.167 4.167 0 004.167-4.167V12.285a4.167 4.167 0 00-4.167-4.167H4.167A4.167 4.167 0 000 12.285V42.84a4.167 4.167 0 004.167 4.167zm26.604-2.925h-6.418v-3.965h6.418v3.965zm15.294-32.944h6.418v3.965h-6.418v-3.965zm-.19 28.979h6.419v3.965h-6.419v-3.965zM35.303 11.138h6.419v3.965h-6.419v-3.965zm-.189 28.979h6.419v3.965h-6.419v-3.965zM24.543 11.138h6.418v3.965h-6.418v-3.965zm-1.8 9.579l9.639 4.82c2.237 1.119 2.237 2.933 0 4.051l-9.639 4.821c-2.237 1.118-4.052-.003-4.052-2.506v-8.681c-.001-2.502 1.814-3.623 4.052-2.505zm-8.961-9.579h6.419v3.965h-6.419v-3.965zm-.189 28.979h6.418v3.965h-6.418v-3.965zM3.021 11.138H9.44v3.965H3.021v-3.965zm-.189 28.979h6.419v3.965H2.832v-3.965z" />
			</Svg>
		)
	}
	if (props.name === 'sme_corner') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 55.125 55.125" {...props}>
				<Path fill={props.color} d="M4.167 47.007h46.792a4.167 4.167 0 004.167-4.167V12.285a4.167 4.167 0 00-4.167-4.167H4.167A4.167 4.167 0 000 12.285V42.84a4.167 4.167 0 004.167 4.167zm26.604-2.925h-6.418v-3.965h6.418v3.965zm15.294-32.944h6.418v3.965h-6.418v-3.965zm-.19 28.979h6.419v3.965h-6.419v-3.965zM35.303 11.138h6.419v3.965h-6.419v-3.965zm-.189 28.979h6.419v3.965h-6.419v-3.965zM24.543 11.138h6.418v3.965h-6.418v-3.965zm-1.8 9.579l9.639 4.82c2.237 1.119 2.237 2.933 0 4.051l-9.639 4.821c-2.237 1.118-4.052-.003-4.052-2.506v-8.681c-.001-2.502 1.814-3.623 4.052-2.505zm-8.961-9.579h6.419v3.965h-6.419v-3.965zm-.189 28.979h6.418v3.965h-6.418v-3.965zM3.021 11.138H9.44v3.965H3.021v-3.965zm-.189 28.979h6.419v3.965H2.832v-3.965z" />
			</Svg>
		)
	}
	if (props.name === 'legislation') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 33.441 33.441">
				<Path fill={props.color} d="M11.452 5.3l7.317 4.225a.425.425 0 00.578-.155l.211-.366a.423.423 0 00-.154-.577l-7.318-4.225a.423.423 0 00-.577.154l-.211.366a.423.423 0 00.154.578zM5.115 16.277l7.318 4.226a.424.424 0 00.577-.154l.211-.365a.422.422 0 00-.154-.577l-7.318-4.225a.423.423 0 00-.577.154l-.211.366a.419.419 0 00.154.575zM30.92 21.44l-14.646-7.591 1.969-3.41a.424.424 0 00-.153-.577l-6.588-3.803a.424.424 0 00-.577.155l-4.648 8.05a.425.425 0 00.155.577l6.587 3.802a.421.421 0 00.576-.154l1.97-3.41 13.896 8.889a.4.4 0 00.567-.139l1.057-1.83a.402.402 0 00-.165-.559zM33.23 22.509l-.731-.422a.423.423 0 00-.577.154l-1.269 2.195a.424.424 0 00.155.576l.731.422c.201.117.46.048.577-.154l1.268-2.195a.42.42 0 00-.154-.576zM17.418 25.114h-.881a.695.695 0 00.185-.464v-.696a.699.699 0 00-.696-.697H2.09a.699.699 0 00-.697.697v.696c0 .18.074.34.186.464H.697a.7.7 0 00-.697.698v2.787c0 .383.313.697.697.697H17.42a.697.697 0 00.696-.697V25.81a.7.7 0 00-.698-.696zm-.991 3.221H1.752a.735.735 0 01-.733-.732v-.734a.734.734 0 01.733-.732h14.675c.405 0 .735.33.734.731l.001.735a.736.736 0 01-.735.732z" />
			</Svg>
		)
	}
	if (props.name === 'law_school') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 470 470">
				<Path fill={props.color} d="M462.5 240H360v-53.5c0-.277-.017-.55-.047-.819-.007-.067-.021-.132-.03-.198a7.588 7.588 0 00-.104-.606c-.017-.075-.038-.148-.057-.222a7.561 7.561 0 00-.162-.557c-.026-.077-.055-.152-.083-.227a7.593 7.593 0 00-.325-.745 7.716 7.716 0 00-.266-.48c-.044-.073-.087-.147-.133-.219a7.623 7.623 0 00-.33-.464c-.046-.061-.089-.124-.137-.183a7.542 7.542 0 00-.527-.588c-.018-.018-.039-.034-.058-.052a7.145 7.145 0 00-.537-.477c-.017-.014-.031-.03-.049-.043L242.5 89.871V15H308v28h-43a7.5 7.5 0 000 15h50.5a7.5 7.5 0 007.5-7.5v-43a7.5 7.5 0 00-7.5-7.5H235a7.5 7.5 0 00-7.5 7.5v82.371l-114.655 90.748c-.017.013-.032.029-.049.043-.187.151-.366.31-.537.477-.018.018-.039.034-.058.052a7.542 7.542 0 00-.527.588c-.048.059-.091.122-.137.183a7.623 7.623 0 00-.33.464c-.047.072-.089.146-.133.219a7.716 7.716 0 00-.376.708c-.078.169-.15.341-.215.517-.028.076-.057.151-.083.227a7.287 7.287 0 00-.162.557c-.019.074-.04.147-.057.222a7.511 7.511 0 00-.104.606c-.009.066-.023.132-.03.198a7.633 7.633 0 00-.047.819V240H7.5a7.5 7.5 0 00-7.5 7.5v215a7.5 7.5 0 007.5 7.5h455a7.5 7.5 0 007.5-7.5v-215a7.5 7.5 0 00-7.5-7.5zm-7.5 15v25h-95v-25h95zm-345 0v25H15v-25h95zm185 76.667V425h-52.5v-93.333H295zM227.5 425H175v-93.333h52.5V425zM175 440h120v15H175v-15zm135 15V324.167a7.5 7.5 0 00-7.5-7.5h-135a7.5 7.5 0 00-7.5 7.5V455H15V295h95v137.5a7.5 7.5 0 0015 0V194h137.5a7.5 7.5 0 000-15H139.061L235 103.065 330.939 179H292.5a7.5 7.5 0 000 15H345v238.5a7.5 7.5 0 0015 0V295h95v160H310z" />
				<Path fill={props.color} d="M44.167 316.667a7.5 7.5 0 00-7.5 7.5v30a7.5 7.5 0 0015 0v-30a7.5 7.5 0 00-7.5-7.5zM80.833 316.667a7.5 7.5 0 00-7.5 7.5v30a7.5 7.5 0 0015 0v-30a7.5 7.5 0 00-7.5-7.5zM425.833 316.667a7.5 7.5 0 00-7.5 7.5v30a7.5 7.5 0 0015 0v-30a7.5 7.5 0 00-7.5-7.5zM389.167 316.667a7.5 7.5 0 00-7.5 7.5v30a7.5 7.5 0 0015 0v-30a7.5 7.5 0 00-7.5-7.5zM235 219c-20.034 0-36.333 16.299-36.333 36.333s16.299 36.333 36.333 36.333 36.333-16.299 36.333-36.333S255.034 219 235 219zm0 57.667c-11.763 0-21.333-9.57-21.333-21.333S223.237 234 235 234s21.333 9.57 21.333 21.333-9.57 21.334-21.333 21.334z" />
			</Svg>
		)
	}
	if (props.name === 'law_reports') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 512 512">
				<Path fill={props.color} d="M464 128h-40V24c0-13.233-10.766-24-24-24H48C34.766 0 24 10.767 24 24v464c0 13.234 10.766 24 24 24h384c13.234 0 24-10.766 24-24V384h24a8 8 0 008-8V152c0-13.233-10.766-24-24-24zM40 488V24c0-4.411 3.589-8 8-8h352c4.411 0 8 3.589 8 8V488.008c.001 2.802.489 5.49 1.376 7.992H48c-4.411 0-8-3.589-8-8zm392 8c-4.411 0-8-3.589-8-8V144h17.376a23.885 23.885 0 00-1.376 8v336c0 4.411-3.589 8-8 8zm24-344c0-4.411 3.589-8 8-8s8 3.589 8 8v216h-16V152z" />
				<Path fill={props.color} d="M368 48H80a8 8 0 000 16h288a8 8 0 000-16zM320 88a8 8 0 00-8-8H136a8 8 0 000 16h176a8 8 0 008-8zM368 128H240a8 8 0 000 16h128a8 8 0 000-16zM368 160h-32a8 8 0 000 16h32a8 8 0 000-16zM312 168a8 8 0 00-8-8h-64a8 8 0 000 16h64a8 8 0 008-8zM368 224h-32a8 8 0 000 16h32a8 8 0 000-16zM232 232a8 8 0 008 8h64a8 8 0 000-16h-64a8 8 0 00-8 8zM368 192h-80a8 8 0 000 16h80a8 8 0 000-16zM256 192h-16a8 8 0 000 16h16a8 8 0 000-16zM368 256H240a8 8 0 000 16h128a8 8 0 000-16zM208 320H80a8 8 0 000 16h128a8 8 0 000-16zM368 288H80a8 8 0 000 16h288a8 8 0 000-16zM208 352h-32a8 8 0 000 16h32a8 8 0 000-16zM80 368h64a8 8 0 000-16H80a8 8 0 000 16zM208 416h-32a8 8 0 000 16h32a8 8 0 000-16zM80 432h64a8 8 0 000-16H80a8 8 0 000 16zM208 384h-80a8 8 0 000 16h80a8 8 0 000-16zM80 400h16a8 8 0 000-16H80a8 8 0 000 16zM208 448H80a8 8 0 000 16h128a8 8 0 000-16zM80 272h112a8 8 0 008-8V136a8 8 0 00-8-8H80a8 8 0 00-8 8v128a8 8 0 008 8zm8-128h96v112H88V144zM368 320H256a8 8 0 00-8 8v128a8 8 0 008 8h112a8 8 0 008-8V328a8 8 0 00-8-8zm-8 128h-96V336h96v112z" />
			</Svg>
		)
	}
	if (props.name === 'decided_cases') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 491.695 491.695">
				<Path fill={props.color} d="M436.714 0H149.471c-16.438 0-29.812 13.374-29.812 29.812v66.714C65.169 112.12 25.17 162.383 25.17 221.814s39.998 109.694 94.489 125.288v114.783c0 16.438 13.374 29.812 29.812 29.812h234.733c2.785 0 5.455-1.106 7.425-3.075L463.45 416.8a10.5 10.5 0 003.075-7.425V29.812C466.525 13.374 453.152 0 436.714 0zM149.471 21h287.243c4.858 0 8.811 3.953 8.811 8.812v31.689H140.659V29.812c0-4.859 3.953-8.812 8.812-8.812zM46.17 221.813c0-60.263 49.027-109.29 109.29-109.29 60.263 0 109.29 49.027 109.29 109.29s-49.027 109.291-109.29 109.291c-60.263 0-109.29-49.028-109.29-109.291zm94.489 240.071V351.258c4.86.552 9.797.846 14.802.846 39.135 0 74.292-17.347 98.195-44.752h64.336c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-49.381a129.347 129.347 0 0016.644-53.242h32.736c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-32.603a129.335 129.335 0 00-15.886-53.241h48.488c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-62.974c-23.918-28.323-59.67-46.347-99.558-46.347-5.005 0-9.942.294-14.802.846v-9.867h304.866v316.372h-42.009c-16.439 0-29.811 13.374-29.811 29.811v42.011H149.471c-4.859 0-8.812-3.952-8.812-8.811zm254.046-6.039v-27.16c0-4.859 3.953-8.811 8.811-8.811h27.16l-35.971 35.971z" />
				<Path fill={props.color} d="M359.246 158.869h34.87c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-34.87c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5zM359.246 233.11h34.87c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-34.87c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5zM359.246 307.352h34.87c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-34.87c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5zM394.116 381.593c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5h-98.225c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5h98.225zM236.982 168.845l-12.81-12.81c-3.45-3.449-8.036-5.349-12.915-5.349s-9.465 1.9-12.915 5.349l-67.19 67.19-18.573-18.573a18.148 18.148 0 00-12.914-5.348c-4.878 0-9.465 1.9-12.914 5.349l-12.813 12.812c-7.12 7.121-7.12 18.708.001 25.829l44.297 44.296a18.143 18.143 0 0012.916 5.351h.001c4.878 0 9.465-1.9 12.913-5.349l92.917-92.917c7.12-7.121 7.12-18.709-.001-25.83zM131.151 270.807l-40.429-40.428 8.942-8.942 24.062 24.062c4.101 4.101 10.749 4.101 14.85 0l72.681-72.681 8.942 8.942-89.048 89.047z" />
			</Svg>
		)
	}
	if (props.name === 'contact') {
		return (
			<Svg width={props.height} height={props.height} viewBox="0 0 512 512">
				<Path fill={props.color} d="M199.9 307.1h-83.3c-56.3 0-101 44.8-102.1 100.1-3.1 16.7-7.3 45.9 3.1 56.3 28.1 27.1 91.7 37.5 140.6 37.5 50 0 112.5-10.4 140.6-37.5 10.4-10.4 6.3-39.6 3.1-56.3-.9-55.3-46.7-100.1-102-100.1zm85.5 140.7c-19.8 19.8-68.8 32.3-126 32.3-57.3 0-107.3-12.5-126-31.3-2.1-4.2-12.1-117.3 83.3-122 21.7-1.1 84.4 0 84.4 0 93.5.1 86.4 117.9 84.3 121zM157.2 288.3c45.8 0 83.3-37.5 82.3-82.4 0-45.9-36.5-82.4-82.3-82.4-44.8 0-82.3 37.5-82.3 82.4 0 45.9 36.5 82.4 82.3 82.4zm0-143.9c34.4 0 62.5 28.1 62.5 61.5s-28.1 61.5-62.5 61.5-62.5-28.1-62.5-61.5 28.2-61.5 62.5-61.5zM253.1 11v151.2h32.3v74l74-74H501V11H253.1zm228.1 131.4H352l-45.8 45.9v-45.9h-32.3V31.9h207.3v110.5z" />
				<Path fill={props.color} d="M375 61c1-2.1 3.1-3.1 5.2-3.1s4.2 1 4.2 1c1 2.1 2.1 4.2 2.1 6.3 0 3.1-1 5.2-2.1 6.3l-8.3 9.4c-2.1 3.1-4.2 5.2-5.2 7.3-1 2.1-1 5.2-1 8.3v9.4h18.8v-8.3c0-2.1 0-4.2 1-5.2l4.2-4.2 6.3-6.3c0-1 1-2.1 2.1-3.1 1-1 2.1-2.1 2.1-3.1 1 0 1-1 2.1-3.1 1-1 1-4.2 1-7.3 0-7.3-2.1-13.6-7.3-17.7-5.2-4.2-11.5-6.3-19.8-6.3-7.3 0-14.6 2.1-19.8 7.3-5.2 4.2-8.3 11.5-9.4 19.8H372c.9-3.2 1.9-5.3 3-7.4zM380.2 110c-3.1 0-6.3 1-8.3 3.1-2.1 2.1-3.1 5.2-3.1 8.3 0 3.1 1 6.3 3.1 8.3 2.1 2.1 4.2 3.1 8.3 3.1 3.1 0 6.3-1 8.3-3.1 2.1-2.1 3.1-5.2 3.1-8.3 0-3.1-1-6.3-3.1-8.3-2.1-2-5.2-3.1-8.3-3.1z" />
			</Svg>
		)
	}
};
