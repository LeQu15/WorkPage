import { css } from "@emotion/react";

export const settingsSwitchStyles = () => css`
	&.switch {
		--transition: 300ms;
		--transition500: 500ms;
		--color-dark: #0c0f14;
		--color-darkGray: #21262e;
		--color-gray: #52555a;
		--color-offwhite: #cecece;
		--shadow-color: var(--color-dark);
		position: relative;
		display: flex;
		align-items: center;
		width: 4.5rem;
		height: fit-content;
		background-color: var(--color-dark);
		border-radius: 30px;
		padding: 4px;
		user-select: none;
		cursor: pointer;
		overflow: hidden;
		border: 2px solid black;

		& .svg {
			transition: var(--transition);
			position: absolute;
			left: 5px;
		}

		& .moon {
			width: 18px;
			fill: var(--color-gray);
			opacity: 1;
		}

		& .sun {
			transform: translateY(-50%);
			width: 12px;
			height: 12px;
			border-radius: 50%;
			left: calc(100% - 21.5px);
			top: 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			scale: 0.8;
			opacity: 0;

			& .dot {
				position: relative;
				display: block;
				width: 3px;
				height: 3px;
				border-radius: 50%;
				background: var(--color-dark);
				background: white;
				z-index: 1;
				box-shadow: 11px 0px 0px var(--shadow-color), 10.3px 0px 0px var(--shadow-color), -11px 0px 0px var(--shadow-color), -10.3px 0px 0px var(--shadow-color),
					0px -11px 0px var(--shadow-color), 0px -10.3px 0px var(--shadow-color), 0px 11px 0px var(--shadow-color), 0px 10.3px 0px var(--shadow-color),
					8px 8px 0px var(--shadow-color), 7.3px 7.3px 0px var(--shadow-color), 8px -8px 0px var(--shadow-color), 7.3px -7.3px 0px var(--shadow-color),
					-8px -8px 0px var(--shadow-color), -7.3px -7.3px 0px var(--shadow-color), -8px 8px 0px var(--shadow-color), -7.3px 7.3px 0px var(--shadow-color);

				&::before {
					content: "";
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: white;
					border: 2px solid var(--color-dark);
				}
			}
		}

		& .circle {
			appearance: none;
			position: relative;
			width: 25px;
			height: 25px;
			border-radius: 50%;
			left: 0;
			background-color: var(--color-darkGray);
			border: 1px solid var(--color-darkGray);
			transition: var(--transition500);
			box-shadow: 1px 1px 20px 3px var(--color-darkGray);
			&:hover {
				margin-left: 3px;
			}

			&:checked:hover {
				margin-left: -3px;
			}

			&:checked {
				left: calc(100% - 24px);
				background: white;
				border-color: white;
				box-shadow: 1px 1px 30px 12px white;
			}
		}

		&:has(.circle:checked) {
			background: var(--color-offwhite);
		}

		&:has(.circle:checked) > .sun {
			opacity: 1;
		}

		&:has(.circle:checked) > .moon {
			opacity: 0;
		}
	}
`;
