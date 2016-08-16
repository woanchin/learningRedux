export function fetchUser() {
	console.log("this happened");
	return {
		type: "FETCH_USER_FULFILLED",
		payload: {
			name: "WILL",
			age: 35,
			id: "rawr",
		}
	}
}

export function setUserName(name) {
	return {
		type: "SET_USER_NAME",
		payload: name,
	}
}

export function setUserAge(age) {
	return {
		type: "SET_USER_AGE",
		payload: age,
	}
}