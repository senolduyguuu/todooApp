import React from "react"

function todoLi({ todo, index, deleteTodo }) {
	return (
		<li>
			{todo}
			<button onClick={() => deleteTodo(index)}>Sil</button>
		</li>
	)
}

export default todoLi;