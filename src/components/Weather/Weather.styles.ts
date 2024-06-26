import { css } from "@emotion/react";

export const weatherStyles = () => css`
	&.weather {
		color: white;
		width: 4rem;
		position: absolute;
		bottom: 2.5rem;
		right: 1.5rem;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 0.65rem;
		font-weight: bold;
		text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000, 1px 1px 0px #000,
			-2px -2px 0px #000, -1px -2px 0px #000, 0px -2px 0px #000, 1px -2px 0px #000, 2px -2px 0px #000, 2px -1px 0px #000, 2px 0px 0px #000, 2px 1px 0px #000, 2px 2px 0px #000,
			1px 2px 0px #000, 0px 2px 0px #000, -1px 2px 0px #000, -2px 2px 0px #000, -2px 1px 0px #000, -2px 0px 0px #000, -2px -1px 0px #000;

		& .weatherIcon {
			width: 2.5rem;
			filter: brightness(100) drop-shadow(1px 1px 0 black) drop-shadow(1px -1px 0 black) drop-shadow(-1px -1px 0 black) drop-shadow(-1px 1px 0 black);
			color: white;
		}
	}

	@media (min-width: 768px) {
		&.weather {
			width: 6rem;
			height: 6rem;
			font-size: 0.8rem;

			& .weatherIcon {
				width: 3.5rem;
			}
		}
	}
`;
