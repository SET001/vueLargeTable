import Vue from "vue";
import { StorageService } from './storage'

const cellWidth = 200
const cellHeight = 200

Vue.component('grid', {
	props: ['width', 'height'],
	template: `
		<div class="grid">
			<div id="gridWrapper">
				<table>
					<tr v-for="row in showData">
						<td v-for="cell, index in row">
							<cell :data="cell"></cell>
						</td>
					</tr>
				</table>
			</div>
		</div>
	`,
	data: function(){
		this.height = parseInt(this.height)
		this.width = parseInt(this.width)
		this.storage = new StorageService(this.height, this.width)
		return {
			showData: []
		}
	},
	mounted: function(){
		const [screenWidth, screenHeight] = [this.$el.offsetWidth, this.$el.offsetHeight]
		const screenRows = Math.floor(screenHeight/cellHeight)
		const screenCells = Math.floor(screenWidth/cellWidth)

		this.showData = this.storage.get(0, screenCells, 0, screenRows)

		const wrapper = document.getElementById('gridWrapper')
		wrapper.style.height = `${this.height*cellHeight}px`
		wrapper.style.width = `${this.width*cellWidth}px`

		document.onscroll = e => {
			const [x, y] = [
				Math.ceil(document.documentElement.scrollLeft/cellWidth),
				Math.ceil(document.documentElement.scrollTop/cellHeight)
			]
			this.showData = this.storage.get(x, x+screenCells, y, y+screenRows)
		}
	}
})