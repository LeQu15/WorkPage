import React from "react";
import { Note } from "../Notes";
import { useMemo } from "react";
import "./NotesButton.style.scss";
import { useSettingsContext } from "../../../providers/SettingsContext";
import { css } from "@emotion/react";

type NotesButtonProps = {
	notes: Note[];
	selectedNoteId: string | undefined;
	changeNote: (id: string) => void;
	removeNote: (noteId: string, e: React.MouseEvent) => void;
	createNewNote: () => void;
};

const NotesButton = ({ notes, selectedNoteId, changeNote, removeNote, createNewNote }: NotesButtonProps) => {
	const { color, darkMode } = useSettingsContext();
	const notesSelectionScrollbarStyles = useMemo(
		() => css`
			& {
				scrollbar-color: ${color};
			}

			&::-webkit-scrollbar-thumb {
				background-color: ${color};
			}
		`,
		[color]
	);

	const noteButtonStyles = useMemo(
		() => css`
			&:hover,
			&:focus,
			&.active {
				& .removeNote {
					&:hover,
					&:focus {
						color: ${color} !important;
					}
				}
			}

			&.active {
				border: 2px solid ${color} !important;

				& .removeNote {
					border: 2px solid ${color} !important;
				}
			}
		`,
		[color]
	);

	const addNewNoteStyles = useMemo(
		() => css`
			& {
				background-color: ${color} !important;
			}

			&:hover,
			&:focus {
				background-color: ${color} !important;
			}
		`,
		[color]
	);

	const darkModeStyles = useMemo(
		() => css`
			&.notesSelection {
				background-color: ${darkMode ? "lightgray" : "rgb(27, 27, 27)"};

				&::-webkit-scrollbar-track {
					background-color: ${darkMode ? "gray" : "black"};
				}

				.noteButton {
					background-color: ${darkMode ? "white" : "black"};
					border: 2px solid ${darkMode ? "black" : "white"};
					color: ${darkMode ? "black" : "white"};

					&:hover,
					&:focus,
					&.active {
						& .removeNote {
							background-color: ${darkMode ? "white" : "black"};
							border: 2px solid ${darkMode ? "black" : "white"};
							color: ${darkMode ? "black" : "white"};
						}
					}
				}
			}
		`,
		[darkMode]
	);

	const noteElements = useMemo(
		() =>
			notes.map((note, numericId) => (
				<div className={`noteButton ${selectedNoteId === note.id ? "active" : ""}`} css={noteButtonStyles} key={note.id} onClick={() => changeNote(note.id)}>
					{numericId}
					<button className='removeNote' onClick={(e) => removeNote(note.id, e)}>
						<i className='fa-solid fa-trash'></i>
					</button>
				</div>
			)),
		[changeNote, notes, removeNote, selectedNoteId, noteButtonStyles]
	);

	return (
		<section className='notesSelection' css={[notesSelectionScrollbarStyles, darkModeStyles]}>
			<div className='notesWrapper'>
				{noteElements}
				<button className='noteButton addNewNote' css={addNewNoteStyles} onClick={createNewNote}>
					+
				</button>
			</div>
		</section>
	);
};

export default NotesButton;
