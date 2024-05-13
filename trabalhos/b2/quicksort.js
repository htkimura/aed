// Define a função partition que aceita uma matriz (arr), o índice mais baixo (low) e o índice mais alto (high)
function partition(arr, low, high) {
	// Escolhe o último elemento como pivô
	let pivot = arr[high]
	// Inicializa o índice do menor elemento
	let i = low - 1
	// Itera sobre os elementos do subarray
	for (let j = low; j < high; j++) {
		// Se o elemento atual for menor ou igual ao pivô
		if (arr[j] <= pivot) {
			// Incrementa o índice do menor elemento
			i++
			// Troca os elementos arr[i] e arr[j]
			;[arr[i], arr[j]] = [arr[j], arr[i]]
		}
	}
	// Troca arr[i + 1] e arr[high], colocando o pivô na posição correta
	;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
	// Retorna o índice do pivô após a partição
	return i + 1
}

// Define a função quickSort que aceita uma matriz (arr), o índice mais baixo (low) e o índice mais alto (high)
function quickSort(arr, low, high) {
	// Verifica se ainda há elementos para ordenar
	if (low < high) {
		// Obtém o índice do pivô após a partição
		let pi = partition(arr, low, high)
		// Ordena o subarray antes do pivô
		quickSort(arr, low, pi - 1)
		// Ordena o subarray depois do pivô
		quickSort(arr, pi + 1, high)
	}
}

// Lista de números como string e a divide em uma lista de strings
let arr = [5, 50, 12, 7, 1, 15, 53]
// Obtém o tamanho da lista
let n = arr.length
// Chama a função quickSort para ordenar a lista
quickSort(arr, 0, n - 1)
// Imprime cada elemento da lista ordenada
console.log('Lista ordenada: ' + arr.join(', '))
