const $formSelect = document.querySelector("#form-select");
const $localPost = document.querySelector("#local_post");
const numPostIt = $localPost.children.length;

$formSelect.addEventListener("change", event => {
	const selectCategory = event.target.value;
	filterPostIt(selectCategory);
});

const filterPostIt = filter => {
	if (filter == "Todos") {
		showAll();
		return;
	}
	for (let i = 0; i < numPostIt; i++) {
		let postIt = $localPost.children[i];
		let postItCategory = postIt.children[3].textContent;//Fará com que será capturado o valor do paragráfo que guarda a informação da categória
		postItCategory == filter ? postIt.classList.remove("hiddenPost") : postIt.classList.add("hiddenPost");
	}
};

const showAll = () => {
	for (let j = 0; j < numPostIt; j++) {
		let postIt = $localPost.children[j];
		postIt.classList.remove("hiddenPost");
	}
};
