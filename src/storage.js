export class StorageService{
	constructor(width, height){
		Object.assign(this, {width, height})
		this.data = Array(height).fill([]).map(()=>Array(width).fill(null))
	}

	fetch(x, y){
		if (this.data[x][y] === null){
			this.data[x][y] = {
				id: `${x}x${y}`,
				active: true,
				age: Math.ceil(Math.random()*100),
				weight: Math.ceil(Math.random()*120+15)-15
			}
		}
		return this.data[x][y]
	}

	get(x1, x2, y1, y2){
		const res = []
		for (let i = y1; i<y2; i++){
			const row = []
			for (let j=x1; j<x2; j++){
				row.push(this.fetch(j, i))
			}
			res.push(row)
		}
		return res;
	}
}